const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('slider-two-el')
    .withIcon(Icon.SNIPPET)
    .withLabel('Slider Two Elements')
    .withFile(require('./template.twig'))

    .withDropzones(
        cx.dropzone
            .withDropzone('slide-1')
            .withAllowedElements(
                require('../chart'),
                require('../image-headline-legend'),
                require('../chart-indexed'),
                require('../mandate-table-title-legend'),
                require('../horizontal-bar-chart'),
                require('../chart-pie'),
                require('../table'),
                 require('../table-advanced'),
                   require('../bodytext'),
            ),
        cx.dropzone
            .withDropzone('slide-2')
            .withAllowedElements(
                require('../image-headline-legend'),
                require('../chart'),
                require('../chart-indexed'),
                require('../mandate-table-title-legend'),
                require('../horizontal-bar-chart'),
                require('../chart-pie'),
                require('../table'),
                 require('../table-advanced'),
                   require('../bodytext'),
            )
    );
