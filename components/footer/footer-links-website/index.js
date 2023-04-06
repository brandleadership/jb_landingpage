const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('footer-links-website')
    .withIcon(Icon.CHAIN)
    .withLabel('Links')
    .withFile(require('./template.hbs.twig'))
    .withParts(
        cx.part.link.withLabel('About Us'),
        cx.part.link.withLabel('Contact'),
        cx.part.link.withLabel('Legal')
    );
