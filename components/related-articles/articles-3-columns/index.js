const { cx, Icon } = require('@bsi-cx/design-build')

module.exports = cx.contentElement
    .withElementId('articles-image')
    .withIcon(Icon.THREE_COLUMNS)
    .withLabel('Article-Container 3-column')
    .withDescription('Number of allowed articles: 3')
    .withFile(require('./template.twig'))
    .withStyleConfigs(require('../../../configs/styles/articles-context'))
    .withParts(
        cx.part.plainText.withLabel('Related Articles Title'),
        cx.part.image.withLabel('Article')
    )
