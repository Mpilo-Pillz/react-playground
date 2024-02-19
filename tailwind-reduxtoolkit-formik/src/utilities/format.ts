/**
 * Formats the provided amount in cents as Rands.
 * @param {number} cents - The amount in cents to format.
 * @returns {number} The amount in Rands.
 */
export const formatCentsAsCurrency = (cents: number): number => cents / 100;
