const { cx, Icon } = require('@bsi-cx/design-build')

module.exports = cx.contentElement
    .withElementId('content-spacer')
    .withIcon(Icon.DIVIDER)
    .withLabel('Divider')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.link
            .withId('6115dc9e-6a7d-11ed-a1eb-0242ac120002')
            .withLabel('Divider')
    )
