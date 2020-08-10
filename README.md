# Currency Exchange API

## Context

The project is built with TypeScript on top of the [Nest](https://github.com/nestjs/nest) framework which uses [Express](https://expressjs.com) under the hood. Motivation for choosing Nest is simple - it provides an out-of-the-box experience of a highly testable, scalable, loosely coupled, and easily maintainable architecture. More info on the Nest framework itself can be found [here](https://docs.nestjs.com/).

## Application Description

This API calculates the **total amount** expected after the currency conversion to a set **quote currency** target with an **exchange rate** provided by a 3rd-party service - [Exchange Rate API](https://exchangeratesapi.io/).

For performance and cost reasons exchange rates are cached using a LRU Cache algorithm with a timeout.

> Note: The capacity of the cache is currently set to 2 entries, and the duration of the TTL to 1 minute.

### Request Parameters

- `base_currency` - string, 3 letters ISO currency code. Currency to convert from.
- `quote_currency` - string, 3 letters ISO currency code. Currency to convert to.
- `base_amount` - number, the amount to convert in cents. Example: 100 (1 USD).

Example GET request

```bash
GET http://localhost:3000/quote?base_currency=EUR&quote_currency=USD&base_amount=1000
```

### Response

- `exchange_rate` - decimal, the offered exchange rate. Up to 3 decimal digits.
- `quote_amount` - number, the expected amount in cents. You can choose the rounding policy.

Example response:

```json
{
    "exchange_rate": 1.182,
    "quote_amount": 1182
}
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
