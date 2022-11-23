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
                require('../../../configs/styles/formatted-text-config')
            )
    );

// # element.content-title-lvl-two.label=Title
// # element.content-title-lvl-two.description=Level Two
// # element.content-title-lvl-two.icon=snippet

// # element.content-title-lvl-two.parts.formatted-text.label=Title Options

// html-editor-config.content-title-two-configs.features=bold,italic,underline,strikeThrough,textColor,backgroundColor,fontSize,paragraphFormat,lineHeight
// html-editor-config.content-title-two-configs.text-colors=#ff0000,#00ff00,#0000ff,#008fb3,#20419a,#ffffff
// html-editor-config.content-title-two-configs.background-colors=#ff0000,#00ff00,#0000ff
// html-editor-config.content-title-two-configs.formats=h1,h2,h3,h4,pre
// html-editor-config.content-title-two-configs.font-sizes=8,9,10,11,12,14,16,18,24,30,36,48,72
// html-editor-config.content-title-two-configs.font-size-unit=px
// html-editor-config.content-title-two-configs.font-size-default=12
// html-editor-config.content-title-two-configs.line-heights=1,1.15,1.5,2
// html-editor-config.content-title-two-configs.enter=br

// element.content-title-lvl-two.parts.formatted-text.html-editor-config=content-title-two-configs
