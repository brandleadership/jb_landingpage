const { cx } = require('@bsi-cx/design-build');

module.exports = cx.style
    .withIdentifier('Sticky-button-display')
    .withLabel('Number of Buttons')
    .withCssClasses(
        cx.cssClass.withLabel('One Button').withCssClass('hide-button'),
        cx.cssClass.withLabel('Two Buttons').withCssClass('show-button')
    );
