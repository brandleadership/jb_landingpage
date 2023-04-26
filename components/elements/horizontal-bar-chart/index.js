const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('horizontal-bar-chart')
    .withIcon(Icon.TABLE)
    .withLabel('Chart Bar')
    .withDescription('For Slider')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.plainText.withLabel('Subtitle'),
        cx.part
            .raw('juliusbaer-chart-bar')
            .withLabel('Chart JSON')
            .withProperty('type', 'bar'),
        cx.part.formattedText
            .withLabel('Description Bottom')
            .withHtmlEditorConfig(
                require('../../../configs/editor/title-text-config')
            )
    );
