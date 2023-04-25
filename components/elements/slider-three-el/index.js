const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('slider-three-el')
    .withIcon(Icon.SNIPPET)
    .withLabel('Slider Three Elements')
    .withFile(require('./template.twig'))
    .withDropzones(
        cx.dropzone
            .withDropzone('slide-1')
            .withAllowedElements(
                require('../chart'),
                require('../image-headline-legend')
            ),
        cx.dropzone
            .withDropzone('slide-2')
            .withAllowedElements(
                require('../image-headline-legend'),
                require('../chart')
            ),
        cx.dropzone
            .withDropzone('slide-3')
            .withAllowedElements(
                require('../image-headline-legend'),
                require('../chart')
            )
    );
