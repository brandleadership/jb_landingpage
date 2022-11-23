const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('footer-container')
    .withIcon(Icon.pile)
    .withLabel('Footer-Container')
    .withDescription('Container Footer-Elements')
    .withFile(require('./template.twig'))
    .withParts(cx.part.image.withLabel('Image'));
