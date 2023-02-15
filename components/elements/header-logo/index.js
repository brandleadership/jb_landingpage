const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('header-logo')
    .withLabel('Header Logo')
    .withDescription('Logo')
    .withIcon(Icon.IMAGE)
    .withFile(require('./template.twig'))
    .withParts(cx.part.image.withLabel('Image'));
