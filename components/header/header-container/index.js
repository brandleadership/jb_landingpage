const { cx, Icon } = require('@bsi-cx/design-build')

module.exports = cx.contentElement
    .withElementId('header-container')
    .withIcon(Icon.PILE)
    .withLabel('Header-Container')
    .withDescription('Container for header elements')
    .withFile(require('./template.twig'))
