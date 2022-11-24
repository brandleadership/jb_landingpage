const { cx, Icon } = require('@bsi-cx/design-build')

module.exports = cx.contentElement
    .withElementId('content-title-lvl-three')
    .withIcon(Icon.SNIPPET)
    .withLabel('Title')
    .withDescription('Level Three')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.formattedText
            .withId('78128936-6b06-11ed-a1eb-0242ac120002')
            .withLabel('Title Options')
            .withHtmlEditorConfig(
                require('../../../configs/styles/title-text-config')
            )
    )
