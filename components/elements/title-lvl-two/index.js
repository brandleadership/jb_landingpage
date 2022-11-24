const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('content-title-lvl-two')
    .withIcon(Icon.snippet)
    .withLabel('Title')
    .withDescription('Level Two')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.formattedText
            .withId('78128a94-6b06-11ed-a1eb-0242ac120002')
            .withLabel('Title Options')
            .withHtmlEditorConfig(
                require('../../../configs/styles/title-text-config')
            )
    );
