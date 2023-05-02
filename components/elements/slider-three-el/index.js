const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('slider-three-el')
    .withIcon(Icon.SNIPPET)
    .withLabel('Slider Three Elements')
    .withFile(require('./template.twig'))
    .withDropzones(
        cx.dropzone
            .withDropzone('slide-three-el-1')
            .withAllowedElements(
                require('../horizontal-bar-chart'),
                require('../image-headline-legend')
            ),
        cx.dropzone
            .withDropzone('slide-three-el-2')
            .withAllowedElements(
                require('../image-headline-legend'),
                require('../horizontal-bar-chart')
            ),
        cx.dropzone
            .withDropzone('slide-three-el-3')
            .withAllowedElements(
                require('../image-headline-legend'),
                require('../horizontal-bar-chart')
            )
    );
