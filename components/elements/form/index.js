const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('form-main')
    .withIcon(Icon.SNIPPET)
    .withLabel('Form')
    .withFile(require('./template.twig'))
    .withParts(cx.part.form.withLabel('Form Details'))
    .withDropzones(
        cx.dropzone
            .withDropzone('form-container')
            .withAllowedElements(
                require('../radio-buttons'),
                require('../form-textarea')
            )
    );
