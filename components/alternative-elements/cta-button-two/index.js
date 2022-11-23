const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('articlesalt-calltoaction-two')
    .withIcon(Icon.chain)
    .withLabel('CTA Button')
    .withFile(require('./template.twig'))
    .withParts(cx.part.link.withLabel('Link Details'));

// element.articlesalt-calltoaction-two.label=CTA Button
// element.articlesalt-calltoaction-two.description=Animated Version
// element.articlesalt-calltoaction-two.icon=chain

// element.articlesalt-calltoaction-two.parts.link[0].label=Link Details
