const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('articles-title')
    .withIcon(Icon.heading)
    .withLabel('Title')
    .withFile(require('./template.twig'))
    .withParts(cx.part.plainText.withLabel('Article Title'));

// # element.articles-title.label=Title
// # element.articles-title.icon=heading
// # element.articles-title.parts.plain-text.label=Article Title
