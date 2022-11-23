const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('articles-title')
    .withIcon(Icon.heading)
    .withLabel('Title')
    .withFile(require('./template.twig'))
    .withParts(cx.part.plainText.withLabel('Article Title'));
