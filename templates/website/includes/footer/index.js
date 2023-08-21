const { cx, Include } = require('@bsi-cx/design-build');

/**
 * @type {Include}
 */
module.exports = cx.include
    .withIdentifier('footer')
    .withName('Footer')
    .withEditable(true)
    .withFile(require('./footer.twig'))
    .withDropzones(
        cx.dropzone
            .withDropzone('footer-website')
            .withMaxAllowedElements(1)
            .withAllowedElements(
                require('../../../../components/footer/footer-container-website')
            )
    );
