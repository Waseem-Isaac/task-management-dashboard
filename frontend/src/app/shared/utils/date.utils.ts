/**
 * Converts a Date object to a local YYYY-MM-DD string without timezone shifting.
 * Use this whenever a date needs to be sent to the API as a plain date string.
 */
export function toLocalDateString(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}
