const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('articles-image1')
    .withIcon(Icon.one - column)
    .withLabel('Article-Container 1-column')
    .withDescription('Number of allowed articles: 1')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.plainText.withLabel('Related Articles Title'),
        cx.part.image.withLabel('Article')
    );

// # element.articles-image1.label=Article-Container 1-column
// # element.articles-image1.description=Number of allowed articles: 1
// # element.articles-image1.icon=one-column
// # element.articles-image1.parts.plain-text.label=Related Articles Title
// # element.articles-image1.parts.image[0].label=Article

// # style defined in articles/image/design properties
// element.articles-image1.styles=article-container-context
