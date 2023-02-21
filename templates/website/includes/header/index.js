const { cx, Include } = require('@bsi-cx/design-build');

/**
 * @type {Include}
 */
module.exports = cx.include
    .withIdentifier('header')
    .withName('Header')
    .withEditable(true)
    .withFile(require('./header.twig'));
