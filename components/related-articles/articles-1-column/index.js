const { cx, Icon } = require('@bsi-cx/design-build')

module.exports = cx.contentElement
    .withElementId('articles-image1')
    .withIcon(Icon.ONE_COLUMN)
    .withLabel('Article-Container 1-column')
    .withDescription('Number of allowed articles: 1')
    .withFile(require('./template.twig'))
    .withStyleConfigs(require('../../../configs/styles/articles-context'))
    .withParts(
        cx.part.plainText.withLabel('Related Articles Title'),
        cx.part.image.withLabel('Article')
    )
