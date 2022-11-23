const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('articles-imagewide')
    .withIcon(Icon.one - column)
    .withLabel('Article-Container 1-column wide')
    .withDescription('Number of allowed articles: 1')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.plainText.withLabel('Related Articles Title'),
        cx.part.image.withLabel('Image')
    );

// # element.articles-imagewide.label=Article-Container 1-column wide
// # element.articles-imagewide.description=Number of allowed articles: 1
// # element.articles-imagewide.icon=one-column
// # element.articles-imagewide.parts.plain-text.label=Related Articles Title
// # element.articles-imagewide.parts.image.label=Image

// # style defined in articles/image/design properties
// element.articles-imagewide.styles=article-container-context
