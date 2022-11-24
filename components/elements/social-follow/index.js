const { cx, Icon } = require('@bsi-cx/design-build')

module.exports = cx.contentElement
    .withElementId('content-content2')
    .withIcon(Icon.SOCIAL_FOLLOW)
    .withLabel('Social-Follow-Element')
    .withDescription('Part of Interaction-Container')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.plainText
            .withId('13e2a91e-6b06-11ed-a1eb-0242ac120002')
            .withLabel('Title for Social-Follow')
    )
