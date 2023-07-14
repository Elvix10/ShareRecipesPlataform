import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Recipie extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title:String

  @column()
  public description:String

  @column()
  public ingredients:Array<String>

  @column()
  public image:String

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
