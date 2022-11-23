const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('header-container')
    .withIcon(Icon.pile)
    .withLabel('Header-Container')
    .withDescription('Container for header elements')
    .withFile(require('./template.twig'));
