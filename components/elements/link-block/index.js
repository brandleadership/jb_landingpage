const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('content-link-block')
    .withIcon(Icon.CHAIN)
    .withLabel('Link Block')
    .withDescription('with legend')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.image
            .withId('b5293ae4-6a85-11ed-a1eb-0242ac120002')
            .withLabel('Icon Image'),
        cx.part.plainText
            .withId('b5293f80-6a85-11ed-a1eb-0242ac120002')
            .withLabel('Title'),
        cx.part.link
            .withId('b52941ce-6a85-11ed-a1eb-0242ac120002')
            .withLabel('Button Link')
    );
