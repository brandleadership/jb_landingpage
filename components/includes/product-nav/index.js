const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('product-nav')
    .withIcon(Icon.TEXTAREA)
    .withLabel('Navigation')
    .withFile(require('./template.twig'))
    .withParts(cx.part.html.withLabel('Include Navigation'));
