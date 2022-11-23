const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('content-title-lvl-one')
    .withIcon(Icon.snippet)
    .withLabel('Title')
    .withDescription('Level One')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.formattedText
            .withId('781287ba-6b06-11ed-a1eb-0242ac120002')
            .withLabel('Title Options')
            .withHtmlEditorConfig(
                require('../../../configs/styles/formatted-text-config')
            )
    );

// html-editor-config.content-title-configs.features=bold,italic,underline,strikeThrough,textColor,backgroundColor,fontSize,paragraphFormat,lineHeight
// html-editor-config.content-title-configs.text-colors=#ff0000,#00ff00,#0000ff,#008fb3,#20419a,#ffffff
// html-editor-config.content-title-configs.background-colors=#ff0000,#00ff00,#0000ff
// html-editor-config.content-title-configs.formats=h1,h2,h3,h4,pre
// html-editor-config.content-title-configs.font-sizes=8,9,10,11,12,14,16,18,24,30,36,48,72
// html-editor-config.content-title-configs.font-size-unit=px
// html-editor-config.content-title-configs.font-size-default=12
// html-editor-config.content-title-configs.line-heights=1,1.15,1.5,2
// html-editor-config.content-title-configs.enter=br
