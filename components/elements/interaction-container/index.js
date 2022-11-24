const { cx, Icon } = require('@bsi-cx/design-build')

module.exports = cx.contentElement
    .withElementId('content-printsubscribe')
    .withIcon(Icon.PILE)
    .withLabel('Interaction-Container')
    .withDescription('print/subscribe, social-follow')
    .withFile(require('./template.twig'))
