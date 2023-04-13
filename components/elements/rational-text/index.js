const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('rational-text')
    .withIcon(Icon.TEXT)
    .withLabel('Rational text')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.formattedText
            .withLabel('Visible Main Text')
            .withHtmlEditorConfig(
                require('../../../configs/editor/title-text-config')
            ),
        cx.part.formattedText
            .withLabel('Not Visible Secondary Text')
            .withHtmlEditorConfig(
                require('../../../configs/editor/title-text-config')
            )
    );
