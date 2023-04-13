const { cx, Include } = require('@bsi-cx/design-build');

/**
 * @type {Include}
 */
module.exports = cx.include
    .withIdentifier('rational-top-header')
    .withName('Rational Top Header')
    .withEditable(true)
    .withFile(require('./rational-top-header.twig'));
// .withDropzones(
//     cx.dropzone
//         .withDropzone('rational')
//         .withMaxAllowedElements(1)
//         .withAllowedElements(
//             require('../../../../components/elements/rational-text')
//         )
// );
