const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('content-text-image')
    .withIcon(Icon.Image)
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

// # element.content-text-image.label=Image-Element
// # element.content-text-image.description=with legend
// # element.content-text-image.icon=text-with-image
// # element.content-text-image.parts.image[0].label=Imagesource
// # element.content-text-image.parts.plain-text[0].label=Picture caption
