import { Model } from 'objection'
import { AuthenticationMethod } from './AuthenticationMethod';

export class Account extends Model {
  id: string
  email: string
  
  static get tableName() {
    return 'accounts';
  }

  static relationMappings = {
    authenticationMethods: {
      relation: Model.HasManyRelation,
      modelClass: AuthenticationMethod,
      join: {
        from: 'accounts.id',
        to: 'authentication_methods.account_id'
      }
    }
  }

  accountId() {
    return this.id
  }

  claims(use, scope) {
    return {
      sub: this.id
    }
  }
}
