const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('articlesalt-calltoaction')
    .withIcon(Icon.megaphone)
    .withLabel('«Call-to-action»-Button')
    .withFile(require('./template.twig'));

// # element.articlesalt-calltoaction.label=«Call-to-action»-Button
// # element.articlesalt-calltoaction.icon=megaphone
