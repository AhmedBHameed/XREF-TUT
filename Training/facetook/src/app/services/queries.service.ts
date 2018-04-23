import { Injectable } from '@angular/core';

@Injectable()
export class QueriesService {
  GraphQL_addUser: any;
  constructor() { }
  formAddUserQuery(object: any): any {
    return {
      query: `
        mutation {
            addUser(username: "${object.username}", email: "${object.email}",
            gender: "${object.gender}",
            password: "${object.password}")
            {
              username
            }
        }
      `
    };
  }
}
