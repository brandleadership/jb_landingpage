const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('html-table-element')
    .withIcon(Icon.TABLE)
    .withLabel('Table Key Figure Element')
    .withDescription('For Table Key Figure')
    .withFile(require('./template.twig'));
