const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('chart-freeform')
    .withIcon(Icon.TABLE)
    .withLabel('Chart Freeform')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.plainText.withLabel('Subtitle'),
        cx.part.plainText.withLabel('Description Top'),
        cx.part
            .raw('juliusbaer-chart')
            .withLabel('Chart JSON')
            .withProperty('type', 'line'),
        cx.part.plainText.withLabel('Description Bottom')
    );
