const { cx, Icon } = require('@bsi-cx/design-build')

module.exports = cx.contentElement
    .withElementId('articlesalt-optinoptout')
    .withIcon(Icon.SIGNPOST)
    .withLabel('«optin/optout»-Button')
    .withFile(require('./template.twig'))
