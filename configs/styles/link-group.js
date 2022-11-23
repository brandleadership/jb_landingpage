const { cx } = require('@bsi-cx/design-build');

module.exports = cx.style
    .withIdentifier('Link-group')
    .withLabel('Link Group Title Style')
    .withCssClasses(
        cx.cssClass
            .withLabel('Normal')
            .withCssClass('default-links-group-title'),
        cx.cssClass
            .withLabel('Uppercase Only')
            .withCssClass('uppercase-links-group-title')
    );
