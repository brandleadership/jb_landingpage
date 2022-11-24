const { cx, Icon } = require('@bsi-cx/design-build')

module.exports = cx.contentElement
    .withElementId('articlesalt-calltoaction')
    .withIcon(Icon.MEGAPHONE)
    .withLabel('«Call-to-action»-Button')
    .withFile(require('./template.twig'))
