const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('rating-element')
    .withIcon(Icon.SNIPPET)
    .withLabel('Rating element part')
    .withDescription('For Rating Element Section')
    .withFile(require('./template.twig'))
    .withParts(
    cx.part.link.withLabel('Rating-link-1'),
    cx.part.link.withLabel('Rating-link-2')
 )