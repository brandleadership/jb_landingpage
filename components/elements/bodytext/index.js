const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('content-text')
    .withIcon(Icon.TEXT)
    .withLabel('Bodytext-Element')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.formattedText
            .withLabel('Bodytext')
            .withId('c2b1ef58-6b34-11ed-a1eb-0242ac120002')
            .withHtmlEditorConfig(
                require('../../../configs/styles/body-text-config')
            ),
        cx.part.formattedText
            .withLabel('Content Bodytext')
            .withId('c2b1f282-6b34-11ed-a1eb-0242ac120002')
            .withHtmlEditorConfig(
                require('../../../configs/styles/body-text-config')
            )
    );
