const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('content-image')
    .withIcon(Icon.image)
    .withLabel('Image-Element')
    .withDescription('Without legend')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.image
            .withId('22da07b6-6a82-11ed-a1eb-0242ac120002')
            .withLabel('Imagesource')
    );
