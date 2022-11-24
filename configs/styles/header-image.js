const { cx } = require('@bsi-cx/design-build');

module.exports = cx.style
    .withIdentifier('Header-image')
    .withLabel('Heading Style Layout')
    .withCssClasses(
        cx.cssClass.withLabel('21 : 9').withCssClass('ratio-21-9'),
        cx.cssClass.withLabel('General').withCssClass('ratio-random')
    );
