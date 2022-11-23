const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('footer-container')
    .withIcon(Icon.pile)
    .withLabel('Footer-Container')
    .withDescription('Container Footer-Elements')
    .withFile(require('./template.twig'))
    .withParts(cx.part.image.withLabel('Image'));

// # element.footer-container.label=Footer-Container
// # element.footer-container.description=Container Footer-Elements
// # element.footer-container.icon=pile
// # element.footer-container.parts.image[0].label=Image
