const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('header-container')
    .withIcon(Icon.PILE)
    .withLabel('Header-Container')
    .withDescription('Container for header elements')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.plainText
            .withId('f452f0d6-6b0f-11ed-a1eb-0242ac120002')
            .withLabel('Title Details'),
        cx.part.plainText
            .withId('f452e97e-6b0f-11ed-a1eb-0242ac120002')
            .withLabel('Publish-Date'),
        cx.part.plainText
            .withId('f452ed48-6b0f-11ed-a1eb-0242ac120002')
            .withLabel('Author'),
        cx.part.plainText
            .withId('f452ef14-6b0f-11ed-a1eb-0242ac120002')
            .withLabel('Estimated reading time'),
        cx.part.image
            .withId('f452f266-6b0f-11ed-a1eb-0242ac120002')
            .withLabel('Imagesource'),
        cx.part.plainText
            .withId('3d8a0464-6b11-11ed-a1eb-0242ac120002')
            .withLabel('Lead Details')
    )
    .withDropzones(
        cx.dropzone
            .withDropzone('header1')
            .withMaxAllowedElements(1)
            .withAllowedElements(require('../header-h1')),
        cx.dropzone
            .withDropzone('header2')

            .withMaxAllowedElements(1)
            .withAllowedElements(require('../breadcrumb')),
        cx.dropzone
            .withDropzone('header3')
            .withMaxAllowedElements(1)
            .withAllowedElements(require('../header-image')),
        cx.dropzone
            .withDropzone('header4')
            .withAllowedElements(require('../header-lead')),
        cx.dropzone
            .withDropzone('header5')
            .withAllowedElements(
                require('../../alternative-elements/cta-button')
            )
    );
