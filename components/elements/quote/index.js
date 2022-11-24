const { cx, Icon } = require('@bsi-cx/design-build')

module.exports = cx.contentElement
    .withElementId('content-quote')
    .withIcon(Icon.COMMUNICATION)
    .withLabel('Quote')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.plainText
            .withId('ee65d24c-6b00-11ed-a1eb-0242ac120002')
            .withLabel('Quote'),
        cx.part.plainText
            .withId('ee65cec8-6b00-11ed-a1eb-0242ac120002')
            .withLabel('Source-reference')
    )
