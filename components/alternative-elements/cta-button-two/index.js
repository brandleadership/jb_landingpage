const { cx, Icon } = require('@bsi-cx/design-build')

module.exports = cx.contentElement
    .withElementId('articlesalt-calltoaction-two')
    .withIcon(Icon.CHAIN)
    .withLabel('CTA Button')
    .withDescription('Animated Version')
    .withFile(require('./template.twig'))
    .withParts(cx.part.link.withLabel('Link Details'))
