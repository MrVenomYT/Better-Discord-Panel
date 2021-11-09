/**
 * @file addText.js
 * @author MrVenom
 * @license GPL-3.0
 */

function addText(value) {
  const toSend = $('#toSend');
  toSend.html(`${toSend.html() + escapeHtml(value)} `);
}
