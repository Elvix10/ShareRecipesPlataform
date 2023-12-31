import  Hash from '@ioc:Adonis/Core/Hash';
import { DateTime } from 'luxon'
import { BaseModel, HasMany, beforeSave, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Recipie from './Recipie'
import Comment from './Comment'


export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public username:string

  @column({serializeAs:null})
  public password:string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(()=>Recipie)
  public recipe: HasMany<typeof Recipie> 

  @hasMany(()=>Comment)
  public comment: HasMany<typeof Comment > 

  @beforeSave()

  public static async hashPassword(user: User) {

    if (user.$dirty.password) {

      user.password = await Hash.make(user.password)

    }

  }



 

}
