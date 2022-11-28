const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('content-content1')
    .withIcon(Icon.PAPERCLIP)
    .withLabel('Print/Subscribe-Element')
    .withDescription('Part of Interaction-Container')
    .withFile(require('./template.twig'));
