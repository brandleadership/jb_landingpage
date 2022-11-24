const { cx, Icon } = require('@bsi-cx/design-build')

module.exports = cx.contentElement
    .withElementId('content-title-lvl-one')
    .withIcon(Icon.SNIPPET)
    .withLabel('Title')
    .withDescription('Level One')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.formattedText
            .withId('781287ba-6b06-11ed-a1eb-0242ac120002')
            .withLabel('Title Options')
            .withHtmlEditorConfig(
                require('../../../configs/styles/title-text-config')
            )
    )
