const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('content-table-advanced')
    .withIcon(Icon.table)
    .withLabel('Table')
    .withDescription('With Title + Legend')
    .withFile(require('./template.twig'));
