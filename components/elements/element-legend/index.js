const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('element-legend')
    .withIcon(Icon.SNIPPET)
    .withLabel('Element Legend')
    .withDescription('For Advanced Table + Image')
    .withFile(require('./template.twig'))
    .withStyleConfigs(require('../../../configs/styles/legend-align'))
    .withParts(
        cx.part.formattedText
            .withId('25c0688c-6a80-11ed-a1eb-0242ac120002')
            .withLabel('Legend, Source / Reference')
            .withHtmlEditorConfig(
                require('../../../configs/editor/legend-text-config')
            )
    );
