const { cx } = require('@bsi-cx/design-build');

module.exports = cx.style
    .withIdentifier('Highlightelement-box')
    .withLabel('Hightlighted Element')
    .withCssClasses(
        cx.cssClass.withLabel('First').withCssClass('risk-level-one'),
        cx.cssClass.withLabel('Second').withCssClass('risk-level-two'),
        cx.cssClass.withLabel('Third').withCssClass('risk-level-three'),
        cx.cssClass.withLabel('Fourth').withCssClass('risk-level-four'),
        cx.cssClass.withLabel('Fifth').withCssClass('risk-level-five'),
        cx.cssClass.withLabel('Sixth').withCssClass('risk-level-six'),
        cx.cssClass.withLabel('Seventh').withCssClass('risk-level-seven')
    );
