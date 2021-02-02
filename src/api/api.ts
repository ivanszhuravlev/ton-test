import {EXTERNALS} from '../constants';

export const getRoute = (appendix: string) =>
  `${EXTERNALS.API_HOST}${appendix}&api_key=${EXTERNALS.API_TOKEN}`;

interface IParams {
  method: 'POST' | 'GET';
  body?: Object;
}

export const api = async (route: string, params: IParams = {method: 'GET'}) => {
  const response = await fetch(getRoute(route), {
    method: params.method,
    body: JSON.stringify(params.body),
  });

  return await response.json();
};
