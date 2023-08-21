const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('mandate-table')
    .withIcon(Icon.TABLE)
    .withLabel('Table Key Figure')
    .withDescription('With Title + Legend')
    .withFile(require('./template.twig'))
    .withDropzones(
        cx.dropzone
            .withDropzone('mandate-table-title')
            .withAllowedElements(require('../element-heading')),
        cx.dropzone
            .withDropzone('mandate-table')
            .withAllowedElements(require('../html-table-element')),
        cx.dropzone
            .withDropzone('mandate-table-legend')
            .withAllowedElements(require('../element-legend'))
    );
