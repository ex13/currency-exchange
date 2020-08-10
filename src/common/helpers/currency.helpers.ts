/**
 * Calculates the quote amount.
 *
 * @function
 * @param {number} baseAmount in cents
 * @param {number} exchangeRate in cents
 * @returns {number} quote amount in cents
 */
export function calculateQuoteAmount(
  baseAmount: number,
  exchangeRate: number
): number {
  const costOfOneCent = 100 / exchangeRate;

  return +(baseAmount / costOfOneCent).toFixed(0);
}

/**
 * Converts the provided amount to cents.
 *
 * @function
 * @param {number} amount
 * @returns {number}
 */
export function convertToCents(amount: number): number {
  return amount * 100;
}
