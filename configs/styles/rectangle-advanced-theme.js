const { cx } = require('@bsi-cx/design-build');

module.exports = cx.style
    .withIdentifier('Rectangle-advanced-theme')
    .withLabel('Rectangle Advanced Theme')
    .withCssClasses(
        cx.cssClass
            .withLabel('Bright')
            .withCssClass('rectangle-advanced-bright'),
        cx.cssClass.withLabel('Dark').withCssClass('rectangle-advanced-dark'),
        cx.cssClass.withLabel('Stone').withCssClass('rectangle-advanced-stone')
    );
