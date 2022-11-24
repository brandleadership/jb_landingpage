const { cx, Icon } = require('@bsi-cx/design-build')

module.exports = cx.contentElement
    .withElementId('header-image')
    .withIcon(Icon.IMAGE)
    .withLabel('Headerimage')
    .withFile(require('./template.twig'))
    .withStyleConfigs(require('../../../configs/styles/header-image'))
    .withParts(
        cx.part.image
            .withId('f452f266-6b0f-11ed-a1eb-0242ac120002')
            .withLabel('Imagesource')
    )
