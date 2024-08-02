/**
 * Converts a date to a consistent pretty string format
 * @param date {Date} - A javascript date object
 * @returns {string} - A date string, in this format: February 8, 2024
 */
export const prettifyDate = (date: Date) => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
