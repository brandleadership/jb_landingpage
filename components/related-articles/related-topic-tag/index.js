const { cx, Icon } = require('@bsi-cx/design-build')

module.exports = cx.contentElement
    .withElementId('related-topic-tag')
    .withIcon(Icon.LIST)
    .withLabel('Topic Tag')
    .withDescription('Related Topic Tag ')
    .withFile(require('./template.twig'))
