const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('content-text')
    .withIcon(Icon.text)
    .withLabel('Bodytext-Element')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.formattedText
            .withLabel('Bodytext')
            .withId('c2b1ef58-6b34-11ed-a1eb-0242ac120002')
            .withHtmlEditorConfig(
                require('../../../configs/styles/formatted-text-config')
            ),
        cx.part.formattedText
            .withLabel('Content Bodytext')
            .withId('c2b1f282-6b34-11ed-a1eb-0242ac120002')
            .withHtmlEditorConfig(
                require('../../../configs/styles/formatted-text-config')
            )
    );

// html-editor-config.full.features=formatUL,subscript,superscript,textColor,insertLink,bold
// html-editor-config.full.text-colors=#000000,#141e55,#22338b,#eeeeee,#ffffff
// html-editor-config.full.background-colors=#973436,#000000,#ffffff,#4283bc,#296b4f,#4283bc,#333963
// html-editor-config.full.formats=h1,h2,h3,h4,pre,p
// html-editor-config.full.font-sizes=8,9,10,11,12,13,14,16,18,24,30,36,48,72
// html-editor-config.full.font-size-unit=pt
// html-editor-config.full.font-size-default=12
// html-editor-config.full.line-heights=1,1.15,1.5,2
// html-editor-config.full.enter=p
