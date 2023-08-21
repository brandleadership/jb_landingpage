const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('pie-chart')
    .withIcon(Icon.TABLE)
    .withLabel('Chart Pie')
    .withDescription('For Slider')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.plainText.withLabel('Subtitle'),
        cx.part
            .raw('juliusbaer-chart')
            .withLabel('Chart Pie Data')
            .withProperty('type', 'pie')
    );
