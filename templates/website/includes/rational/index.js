const { cx, Include } = require('@bsi-cx/design-build');

/**
 * @type {Include}
 */
module.exports = cx.include
    .withIdentifier('rational')
    .withName('Rational')
    .withEditable(true)
    .withFile(require('./rational.twig'))
    .withDropzones(
        cx.dropzone
            .withDropzone('rational-text-zone')
            .withMaxAllowedElements(1)
            .withAllowedElements(
                require('../../../../components/elements/rational-text')
            )
    );
