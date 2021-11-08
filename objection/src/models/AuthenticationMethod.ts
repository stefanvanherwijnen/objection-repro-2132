import { Model } from 'objection'
import { Account } from './Account'

export class AuthenticationMethod extends Model {
  id: string
  identifier: string
  password?: string

  static get tableName() {
    return 'authentication_methods'
  }

  relationMappings = () => ({
    account: {
      relation: Model.BelongsToOneRelation,
      modelClass: Account,
      join: {
        from: 'authentication_methods.account_id',
        to: 'accounts.id'
      }
    }
  })
}
