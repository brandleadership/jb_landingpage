const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('header-breadcrumb')
    .withIcon(Icon.image)
    .withLabel('Headerimage')
    .withFile(require('./template.twig'))
    .withStyleConfigs(require('../../../configs/styles/header-image'))
    .withParts(
        cx.part.image
            .withId('f452f266-6b0f-11ed-a1eb-0242ac120002')
            .withLabel('Imagesource')
    );

// # element.header-image.label=Headerimage
// # element.header-image.icon=image
// # element.header-image.parts.image[0].label=Imagesource

// style.header-img-layout.label=Layout
// style.header-img-layout.class.ratio-21-9.label=21 : 9
// style.header-img-layout.class.ratio-random.label=General

// element.header-image.styles=header-img-layout
