const { cx, Icon } = require('@bsi-cx/design-build')

module.exports = cx.contentElement
    .withElementId('content-list-element')
    .withIcon(Icon.LIST)
    .withLabel('List element')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.formattedText
            .withId('c38df9a2-6afe-11ed-a1eb-0242ac120002')
            .withLabel('Text')
            .withHtmlEditorConfig(
                require('../../../configs/styles/formatted-text-config')
            )
    )
