import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Recipie extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title:String
  @column()
  public user_id:Number

  @column()
  public description:String

  @column()
  public ingredients:String

  @column()
  public image:String

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(()=>User)
  public user: BelongsTo<typeof User>
}
