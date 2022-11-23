const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('rticles-image2')
    .withIcon(Icon.two - columns)
    .withLabel('Article-Container 2-column')
    .withDescription('Number of allowed articles: 1')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.plainText.withLabel('Related Articles Title'),
        cx.part.image.withLabel('Article')
    );

// # element.articles-image2.label=Article-Container 2-column
// # element.articles-image2.description=Number of allowed articles: 2
// # element.articles-image2.icon=two-columns
// # element.articles-image2.parts.plain-text.label=Related Articles Title
// # element.articles-image2.parts.image[0].label=Article

// # style defined in articles/image/design properties
// element.articles-image2.styles=article-container-context
