const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('rating-bar-form')
    .withIcon(Icon.SNIPPET)
    .withLabel('Rating Bar with Form')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.plainText.withLabel('Heading'),
        cx.part.formattedText.withLabel('Description')
    )
    .withDropzones(
        cx.dropzone
            .withDropzone('rating-bar-form-container')
            .withAllowedElements(require('../form'))
    );
