import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

const data = require('../mock.json');

const productById: ValidatedEventAPIGatewayProxyEvent<any> = async (event) => {
  const id = event.pathParameters.id;
  const item = data.find((product) => product.id == id);

  return formatJSONResponse({
    product: item
  });
}

export const get = middyfy(productById);
