const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('content-list-element')
    .withIcon(Icon.list)
    .withLabel('List element')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.formattedText
            .withId('c38df9a2-6afe-11ed-a1eb-0242ac120002')
            .withLabel('Text')
            .withHtmlEditorConfig(
                require('../../../configs/styles/formatted-text-config')
            )
    );

// html-editor-config.list-element-configs.features=bold,underline,italic,subscript,superscript,textColor,insertLink
// html-editor-config.list-element-configs.text-colors=#008fb3,#20419a,#ffffff
// element.content-list-element.parts.formatted-text.html-editor-config=list-element-configs
