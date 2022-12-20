const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('related-topics')
    .withIcon(Icon.CHAIN)
    .withLabel('Related Topics')
    .withDescription('Number of allowed tags: 6 ')
    .withFile(require('./template.twig'));
