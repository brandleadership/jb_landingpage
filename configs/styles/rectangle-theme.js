const { cx } = require('@bsi-cx/design-build');

module.exports = cx.style
    .withIdentifier('Rectangle-theme')
    .withLabel('Rectangle Theme')
    .withCssClasses(
        cx.cssClass.withLabel('Bright').withCssClass('highlightbox-bright'),
        cx.cssClass.withLabel('Dark').withCssClass('highlightbox-dark'),
        cx.cssClass.withLabel('Stone').withCssClass('highlightbox-stone')
    );
