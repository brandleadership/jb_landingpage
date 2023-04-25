const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('footer-legal-website')
    .withIcon(Icon.ASTERISK)
    .withLabel('Legal')
    .withFile(require('./template.hbs.twig'))
    .withParts(
        cx.part.link.withLabel('Data Privacy Policy'),
        cx.part.link.withLabel('Terms of Use'),
        cx.part.link.withLabel('News Alert')
    );
