import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

const data = require('../mock.json');

const products: ValidatedEventAPIGatewayProxyEvent<any> = async () => {
  return formatJSONResponse({
    products: data
  });
}

export const list = middyfy(products);
