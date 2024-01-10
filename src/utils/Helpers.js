/**
 * @param {number} number
 * @returns {string}
 */

function formatPriceWithComma(number) {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number);
}

function truncateTitle(title) {
  if (title.length > 40) {
    return title.substring(0, 40) + '...';
  }
  return title;
}

export { formatPriceWithComma, truncateTitle };
