const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('footer-social')
    .withIcon(Icon.social - follow)
    .withLabel('Social-Links')
    .withFile(require('./template.twig'));

// element.footer-social.label=Social-Links
// element.footer-social.icon=social-follow
