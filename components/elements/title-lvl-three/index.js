const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('content-title-lvl-three')
    .withIcon(Icon.snippet)
    .withLabel('Title')
    .withDescription('Level Three')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.formattedText
            .withId('78128936-6b06-11ed-a1eb-0242ac120002')
            .withLabel('Title Options')
            .withHtmlEditorConfig(
                require('../../../configs/styles/formatted-text-config')
            )
    );

// # element.content-title-lvl-three.label=Title
// # element.content-title-lvl-three.description=Level Three
// # element.content-title-lvl-three.icon=snippet

// # element.content-title-lvl-three.parts.formatted-text.label=Title Options

// html-editor-config.content-title-three-configs.features=bold,italic,underline,strikeThrough,textColor,backgroundColor,fontSize,paragraphFormat,lineHeight
// html-editor-config.content-title-three-configs.text-colors=#ff0000,#00ff00,#0000ff,#008fb3,#20419a,#ffffff
// html-editor-config.content-title-three-configs.background-colors=#ff0000,#00ff00,#0000ff
// html-editor-config.content-title-three-configs.formats=h1,h2,h3,h4,pre
// html-editor-config.content-title-three-configs.font-sizes=8,9,10,11,12,14,16,18,24,30,36,48,72
// html-editor-config.content-title-three-configs.font-size-unit=px
// html-editor-config.content-title-three-configs.font-size-default=12
// html-editor-config.content-title-three-configs.line-heights=1,1.15,1.5,2
// html-editor-config.content-title-three-configs.enter=br

// element.content-title-lvl-three.parts.formatted-text.html-editor-config=content-title-three-configs
