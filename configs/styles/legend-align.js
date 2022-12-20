const { cx } = require('@bsi-cx/design-build');

module.exports = cx.style
    .withIdentifier('Legend-align')
    .withLabel('Alignment Legend')
    .withCssClasses(
        cx.cssClass
            .withLabel('Indented')
            .withCssClass('module-content-gallery__content'),
        cx.cssClass
            .withLabel('Left-Aligned')
            .withCssClass('element-legend-not-indented')
    );
