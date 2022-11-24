const { cx } = require('@bsi-cx/design-build');

module.exports = cx.style
    .withIdentifier('Article-content-display-text')
    .withLabel('Display text')
    .withCssClasses(
        cx.cssClass.withLabel('Shown').withCssClass('text-shown'),
        cx.cssClass.withLabel('Hidden').withCssClass('text-hidden')
    );
