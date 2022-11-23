const { cx } = require('@bsi-cx/design-build');

module.exports = cx.style
    .withIdentifier('Rectangle-with-button-align')
    .withLabel('Rectangle with Button Alignment')
    .withCssClasses(
        cx.cssClass
            .withLabel('Left')
            .withCssClass('highlightbox2-text-align-left'),
        cx.cssClass
            .withLabel('Center')
            .withCssClass('highlightbox2-text-align-center')
    );
