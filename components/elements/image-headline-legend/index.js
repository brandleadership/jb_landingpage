const { cx, Icon } = require('@bsi-cx/design-build')

module.exports = cx.contentElement
    .withElementId('content-text-title-image-alt')
    .withIcon(Icon.SNIPPET)
    .withLabel('Alternative Image-Element')
    .withDescription('with top headline and legend')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.image
            .withId('22da0b62-6a82-11ed-a1eb-0242ac120002')
            .withLabel('Imagesource')
    )
