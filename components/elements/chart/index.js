const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('chart')
    .withIcon(Icon.TABLE)
    .withLabel('Chart')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.plainText.withLabel('Subtitle'),
        cx.part
            .raw('juliusbaer-chart')
            .withLabel('Chart')
            .withProperty('type', 'line')
    );
