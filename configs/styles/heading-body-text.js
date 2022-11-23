const { cx } = require('@bsi-cx/design-build');

module.exports = cx.style
    .withIdentifier('Header-body-text')
    .withLabel('Heading Style')
    .withCssClasses(
        cx.cssClass
            .withLabel('Classic')
            .withCssClass('element-heading-styling-classic'),
        cx.cssClass
            .withLabel('Bodytext Title')
            .withCssClass('element-heading-styling-bodytext')
    );
