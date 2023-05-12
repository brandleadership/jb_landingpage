const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('slider-three-el')
    .withIcon(Icon.SNIPPET)
    .withLabel('Slider Three Elements')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.plainText.withLabel('Title 1'),
        cx.part.plainText.withLabel('Title 2'),
        cx.part.plainText.withLabel('Title 3')
    )
    .withDropzones(
        cx.dropzone
            .withDropzone('slide-three-el-1')
            .withAllowedElements(
                require('../horizontal-bar-chart'),
                require('../chart-pie'),
                require('../image-headline-legend')
            ),
        cx.dropzone
            .withDropzone('slide-three-el-2')
            .withAllowedElements(
                require('../image-headline-legend'),
                require('../horizontal-bar-chart'),
                require('../chart-pie')
            ),
        cx.dropzone
            .withDropzone('slide-three-el-3')
            .withAllowedElements(
                require('../image-headline-legend'),
                require('../horizontal-bar-chart'),
                require('../chart-pie')
            )
    );
