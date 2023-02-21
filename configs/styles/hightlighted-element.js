const { cx } = require('@bsi-cx/design-build');

module.exports = cx.style
    .withIdentifier('Highlightelement-box')
    .withLabel('Hightlighted Element')
    .withCssClasses(
        cx.cssClass.withLabel('First').withCssClass('highlight-first'),
        cx.cssClass.withLabel('Second').withCssClass('highlight-second'),
        cx.cssClass.withLabel('Third').withCssClass('highlight-third'),
        cx.cssClass.withLabel('Fourth').withCssClass('highlight-fourth'),
        cx.cssClass.withLabel('Fifth').withCssClass('highlight-fifth'),
        cx.cssClass.withLabel('Sixth').withCssClass('highlight-sixth'),
        cx.cssClass.withLabel('Seventh').withCssClass('highlight-seventh')
    );
