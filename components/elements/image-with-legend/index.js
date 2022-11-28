const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('content-text-image')
    .withIcon(Icon.IMAGE)
    .withLabel('Image-Element')
    .withDescription('with legend')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.image
            .withId('663ecd46-6a84-11ed-a1eb-0242ac120002')
            .withLabel('Imagesource'),
        cx.part.plainText
            .withId('7967f7ee-6a84-11ed-a1eb-0242ac120002')
            .withLabel('Picture caption')
    );
