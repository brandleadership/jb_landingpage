const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('footer-social')
    .withIcon(Icon.SOCIAL_FOLLOW)
    .withLabel('Social-Links')
    .withFile(require('./template.twig'));
