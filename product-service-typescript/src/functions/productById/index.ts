import { handlerPath } from '@libs/handlerResolver';

export const productById = {
  handler: `${handlerPath(__dirname)}/handler.get`,
  events: [
    {
      http: {
        method: 'get',
        path: 'product/{id}',
        cors: true
      }
    }
  ]
}
