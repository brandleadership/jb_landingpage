const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('element-legend')
    .withIcon(Icon.snippet)
    .withLabel('Element Legend')
    .withDescription('For Advanced Table + Image')
    .withFile(require('./template.twig'))
    .withStyleConfigs(require('../../../configs/styles/legend-align'))
    .withParts(
        cx.part.formattedText
            .withId('25c0688c-6a80-11ed-a1eb-0242ac120002')
            .withLabel('Legend, Source / Reference')
            .withHtmlEditorConfig(
                require('../../../configs/styles/formatted-text-config')
            )
    );

// html-editor-config.legend-formatting.features=bold,italic,underline,subscript,superscript,textColor,insertLink,fontSize
// html-editor-config.legend-formatting.formats=p
// html-editor-config.legend-formatting.font-sizes=8,9,10,11,12,13,14,15,16,17,18,19,20
// html-editor-config.legend-formatting.font-size-unit=px
// html-editor-config.legend-formatting.font-size-default=14
// html-editor-config.legend-formatting.enter=br
// html-editor-config.legend-formatting.text-colors=#008fb3,#20419a,#ffffff

// element.parts.formatted-text.html-editor-config=legend-formatting

// # element.element-legend.label=Element Legend
// # element.element-legend.description=For Advanced Table + Image
// # element.element-legend.icon=snippet

// # element.element-legend.parts.formatted-text[0].label=Legend, Source / Reference
// element.element-legend.parts.formatted-text.html-editor-config=legend-formatting

// style.element-legend-alignment.label=Alignment Legend
// style.element-legend-alignment.class.module-content-gallery__content.label=Indented
// style.element-legend-alignment.class.element-legend-not-indented.label=Left-Aligned

// element.element-legend.styles=element-legend-alignment
