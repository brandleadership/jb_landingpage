const { cx } = require('@bsi-cx/design-build');

module.exports = cx.style
    .withIdentifier('Rectangle-align')
    .withLabel('Alignment Rectangle')
    .withCssClasses(
        cx.cssClass
            .withLabel('Left')
            .withCssClass('highlightbox-text-align-left'),
        cx.cssClass
            .withLabel('Center')
            .withCssClass('highlightbox-text-align-center')
    );
