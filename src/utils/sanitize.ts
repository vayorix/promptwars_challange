/**
 * Escapes special HTML characters to prevent Cross-Site Scripting (XSS) attacks
 * when injecting raw strings into innerHTML templates.
 * 
 * @param str The unsafe raw input string.
 * @returns The HTML-safe escaped string.
 */
export function escapeHTML(str: string): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
