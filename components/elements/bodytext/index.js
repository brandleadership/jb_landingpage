const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('content-text')
    .withIcon(Icon.TEXT)
    .withLabel('Bodytext-Element')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.formattedText
            .withLabel('Title Bodytext')
            .withHtmlEditorConfig(
                require('../../../configs/editor/title-text-config')
            ),
        cx.part.formattedText
            .withLabel('Content Bodytext')
            .withHtmlEditorConfig(
                require('../../../configs/editor/body-text-config')
            )
    );
