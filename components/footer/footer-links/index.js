const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('footer-links')
    .withIcon(Icon.chain)
    .withLabel('Links')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.link
            .withId('e04b985e-6b0a-11ed-a1eb-0242ac120002')
            .withLabel('About Us'),
        cx.part.link
            .withId('e04b9b88-6b0a-11ed-a1eb-0242ac120002')
            .withLabel('Contact'),
        cx.part.link
            .withId('e04b9d40-6b0a-11ed-a1eb-0242ac120002')
            .withLabel('Legal')
    );

// # element.footer-links.label=Links
// # element.footer-links.icon=chain
// # element.footer-links.parts.link[0].label=About Us
// # element.footer-links.parts.link[1].label=Contact
// # element.footer-links.parts.link[2].label=Legal
