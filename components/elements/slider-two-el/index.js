const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('slider-two-el')
    .withIcon(Icon.SNIPPET)
    .withLabel('Slider Two Elements')
    .withFile(require('./template.twig'))
    // .withParts(
    //     cx.part.image.withLabel('1'),
    //     cx.part.image.withLabel('2'),
    //     cx.part.image.withLabel('3')
    // )
    .withDropzones(
        cx.dropzone
            .withDropzone('slide-1')
            .withAllowedElements(require('../chart-indexed')),
        cx.dropzone
            .withDropzone('slide-2')
            .withAllowedElements(require('../table'))
    );
