const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('articlesalt-backtotop')
    .withIcon(Icon.SIGNPOST)
    .withLabel('«back to top»-Button')
    .withFile(require('./template.twig'));
