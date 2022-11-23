const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('articles-image')
    .withIcon(Icon.two - columns)
    .withLabel('Article-Container 3-column')
    .withDescription('Number of allowed articles: 3')
    .withFile(require('./template.twig'))
    .withStyleConfigs(require('../../../configs/styles/articles-context'))
    .withParts(
        cx.part.plainText.withLabel('Related Articles Title'),
        cx.part.image.withLabel('Article')
    );

// style.article-container-context.label=Context
// style.article-container-context.class.content-context.label=Content
// style.article-container-context.class.articles-context.label=Articles

// # element.articles-image.label=Article-Container 3-column
// # element.articles-image.description=Number of allowed articles: 3
// # element.articles-image.icon=three-columns
// # element.articles-image.parts.plain-text.label=Related Articles Title
// # element.articles-image.parts.image[0].label=Article
// element.articles-image.styles=article-container-context
