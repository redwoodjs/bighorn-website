/**
 * prettifyDate
 * @param date {string} - A date string, in this format: 2024-02-08T07:59:20.092Z
 * @returns {string} - A date string, in this format: February 8, 2024
 */
export const prettifyDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
