const { cx } = require('@bsi-cx/design-build');

module.exports = cx.style
    .withIdentifier('Header-align')
    .withLabel('Heading Style')
    .withCssClasses(
        cx.cssClass
            .withLabel('Indented')
            .withCssClass('module-content-gallery__content'),
        cx.cssClass
            .withLabel('Left-Aligned')
            .withCssClass('element-heading-not-indented')
    );
