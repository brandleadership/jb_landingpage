const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('chart-description')
    .withIcon(Icon.SNIPPET)
    .withLabel('Chart Description')
    .withDescription('For Charts')
    .withFile(require('./template.twig'))
    .withStyleConfigs(
        require('../../../configs/styles/heading-align'),
        require('../../../configs/styles/heading-body-text')
    )
    .withParts(
        cx.part.formattedText
            .withLabel('Description Title')
            .withHtmlEditorConfig(
                require('../../../configs/editor/title-text-config')
            )
    );
