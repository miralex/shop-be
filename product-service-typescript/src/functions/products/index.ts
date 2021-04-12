import { handlerPath } from '@libs/handlerResolver';

export const products = {
  handler: `${handlerPath(__dirname)}/handler.list`,
  events: [
    {
      http: {
        method: 'get',
        path: 'products',
        cors: true
      }
    }
  ]
}
