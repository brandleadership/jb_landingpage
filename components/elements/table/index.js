const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('content-table')
    .withIcon(Icon.table)
    .withLabel('Table')
    .withFile(require('./template.twig'));
