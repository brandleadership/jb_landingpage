const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('content-text-title-image')
    .withIcon(Icon.snippet)
    .withLabel('Image-Element')
    .withDescription('with title and legend')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.image
            .withId('22da144a-6a82-11ed-a1eb-0242ac120002')
            .withLabel('Imagesource'),
        cx.part.plainText
            .withId('22da15e4-6a82-11ed-a1eb-0242ac120002')
            .withLabel('Legend, Title'),
        cx.part.plainText
            .withId('22da174c-6a82-11ed-a1eb-0242ac120002')
            .withLabel('Legend, source-reference')
    );

// # element.content-text-title-image.label=Image-Element
// # element.content-text-title-image.description=with title and legend
// # element.content-text-title-image.icon=snippet
// # element.content-text-title-image.parts.image[0].label=Imagesource
// # element.content-text-title-image.parts.plain-text[0].label=Legend, Title
// # element.content-text-title-image.parts.plain-text[1].label=Legend, source-reference
