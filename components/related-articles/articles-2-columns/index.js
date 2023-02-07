const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('articles-image2')
    .withIcon(Icon.TWO_COLUMNS)
    .withLabel('Article-Container 2-column')
    .withDescription('Number of allowed articles: 2')
    .withFile(require('./template.twig'))
    .withStyleConfigs(require('../../../configs/styles/articles-context'))
    .withParts(
        cx.part.plainText.withLabel('Related Articles Title'),
        cx.part.image.withLabel('Article')
    );
