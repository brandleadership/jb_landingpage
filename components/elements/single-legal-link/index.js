const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('content-single-link')
    .withIcon(Icon.chain)
    .withLabel('Single Legal Link')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.formattedText
            .withId('2f406314-6b05-11ed-a1eb-0242ac120002')
            .withLabel('Link Details')
            .withHtmlEditorConfig(
                require('../../../configs/styles/formatted-text-config')
            )
    );

// html-editor-config.single-legal-link.features=bold,fontSize,insertLink,textColor,underline
// html-editor-config.single-legal-link.font-sizes=12,13,14,15,16,17,18,19,20,21,22,23,24
// html-editor-config.single-legal-link.font-size-unit=px
// html-editor-config.single-legal-link.font-size-default=16
// html-editor-config.single-legal-link.text-colors=#000000,#22338b,#ffffff
// html-editor-config.single-legal-link.line-heights=1.1,1.5
// html-editor-config.single-legal-link.enter=br
