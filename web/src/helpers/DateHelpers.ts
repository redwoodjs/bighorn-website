/**
 * Converts a date to a consistent pretty string format
 * @param date {Date} - A javascript date object
 * @returns {string} - A date string, in this format: February 8, 2024
 * @example
 * const date = new Date('2024-08-29T23:10:12.840Z')
 * const prettyDate = prettifyDate(date)
 */
export const prettifyDate = (date: Date) => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * determineDaysAgo
 * @param date {Date} - A javascript date object
 * @returns number - The number of days ago the date was
 */
export const determineDaysAgo = (date: Date) => {
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const daysAgo = Math.floor(diff / (1000 * 60 * 60 * 24))

  return daysAgo
}

export const determineHoursAgo = (date: Date) => {
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const hoursAgo = Math.floor(diff / (1000 * 60 * 60))

  return hoursAgo
}

export const determineMinutesAgo = (date: Date) => {
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const minutesAgo = Math.floor(diff / (1000 * 60))

  return minutesAgo
}
