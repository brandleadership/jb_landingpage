const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('articlesalt-optinoptout')
    .withIcon(Icon.signpost)
    .withLabel('«optin/optout»-Button')
    .withFile(require('./template.twig'));

// element.articlesalt-optinoptout.label=«optin/optout»-Button
// element.articlesalt-optinoptout.icon=signpost
