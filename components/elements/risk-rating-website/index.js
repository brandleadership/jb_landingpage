const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('risk-rating-website')
    .withIcon(Icon.SNIPPET)
    .withLabel('Risk Rating')
    .withFile(require('./template.hbs.twig'))
    .withStyleConfigs(require('../../../configs/styles/highlighted-element'))
    .withParts(
        cx.part.plainText.withLabel('Heading'),
        cx.part.plainText.withLabel('Legend-1'),
        cx.part.plainText.withLabel('Legend-2'),
        cx.part.plainText.withLabel('Legend-3'),
        cx.part.plainText.withLabel('Legend-4'),
        cx.part.plainText.withLabel('Legend-5'),
        cx.part.plainText.withLabel('Legend-6'),
        cx.part.plainText.withLabel('Legend-7')
    );
