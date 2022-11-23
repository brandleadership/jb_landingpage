const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('articlesalt-confirm')
    .withIcon(Icon.signpost)
    .withLabel('«Wildcard»-Button')
    .withFile(require('./template.twig'));
