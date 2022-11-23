const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('content-cta')
    .withIcon(Icon.handshake)
    .withLabel('Contact Link')
    .withDescription('Hyplink')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.link
            .withId('e5154328-6a7c-11ed-a1eb-0242ac120002')
            .withLabel('Hyperlink')
    );

// # element.content-cta.label=Contact Link
// # element.content-cta.icon=handshake
// # element.content-cta.parts.link[0].label=Hyperlink
