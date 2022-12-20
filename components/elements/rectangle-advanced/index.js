const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('rectangle-advanced')
    .withIcon(Icon.FORMFIELD)
    .withLabel('Rectangle Advanced')
    .withDescription('Element with One Dropzone')
    .withFile(require('./template.twig'))
    .withStyleConfigs(
        require('../../../configs/styles/rectangle-advanced-theme')
    );
