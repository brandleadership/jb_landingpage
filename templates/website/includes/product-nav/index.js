const { cx, Include } = require('@bsi-cx/design-build');

/**
 * @type {Include}
 */
module.exports = cx.include
    .withIdentifier('navigation')
    .withName('Navigation')
    .withEditable(false)
    .withFile(require('./product-nav.hbs'));
