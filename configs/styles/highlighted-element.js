const { cx } = require('@bsi-cx/design-build');

module.exports = cx.style
    .withIdentifier('Highlightelement-box')
    .withLabel('Highlighted Element')
    .withCssClasses(
        cx.cssClass.withLabel('Highlight-1').withCssClass('risk-level-1'),
        cx.cssClass.withLabel('Highlight-2').withCssClass('risk-level-2'),
        cx.cssClass.withLabel('Highlight-3').withCssClass('risk-level-3'),
        cx.cssClass.withLabel('Highlight-4').withCssClass('risk-level-4'),
        cx.cssClass.withLabel('Highlight-5').withCssClass('risk-level-5'),
        cx.cssClass.withLabel('Highlight-6').withCssClass('risk-level-6'),
        cx.cssClass.withLabel('Highlight-7').withCssClass('risk-level-7')
    );
