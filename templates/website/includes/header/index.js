const { cx, Include } = require('@bsi-cx/design-build');

/**
 * @type {Include}
 */
module.exports = cx.include
    .withIdentifier('header')
    .withName('Header')
    .withEditable(true)
    .withFile(require('./header.twig'))
    .withDropzones(
        cx.dropzone
            .withDropzone('rational-text')
            .withMaxAllowedElements(1)
            .withAllowedElements(
                require('../../../../components/elements/rational-text')
            )
    );
