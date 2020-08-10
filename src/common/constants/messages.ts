export const MESSAGES = {
  VALIDATION: {
    BASE_CURRENCY_REQUIRED: 'Base currency is required',
    CURRENCY_FIELDS_NOT_EQUAL:
      'Base currency should not be equal to quote currency',
    BASE_CURRENCY_VALID_CODE:
      'Base currency must be a valid currency code. Supported currencies are USD, EUR, GBP and ILS',
    QUOTE_CURRENCY_REQUIRED: 'Quote currency is required',
    QUOTE_CURRENCY_VALID_CODE:
      'Quote currency must be a valid currency code. Supported currencies are USD, EUR, GBP and ILS',
    BASE_AMOUNT_REQUIRED: 'Base amount is required',
    BASE_AMOUNT_INVALID: 'Base amount should be a numeric value in cents',
  },
  ERROR: {
    QUOTE_CURRENCY_NOT_FOUND:
      'Quote currency not found in the Exchange Rate API',
  },
};
