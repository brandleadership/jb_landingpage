const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('rating-bar-form')
    .withIcon(Icon.SNIPPET)
    .withLabel('Rating Bar with Form')
    .withFile(require('./template.twig'))
    // .withParts(
    //     cx.part.plainText.withLabel('Heading'),
    //     cx.part.plainText.withLabel('Description'),
    //     cx.part.link.withLabel('Link Square Option 1'),
    //     cx.part.link.withLabel('Label Option 1'),
    //     cx.part.link.withLabel('Link Square Option 2'),
    //     cx.part.link.withLabel('Label Option 2'),
    //     cx.part.link.withLabel('Link Square Option 3'),
    //     cx.part.link.withLabel('Label Option 3'),
    //     cx.part.link.withLabel('Link Square Option 4'),
    //     cx.part.link.withLabel('Label Option 4'),
    //     cx.part.link.withLabel('Link Square Option 5'),
    //     cx.part.link.withLabel('Label Option 5')
    // )
    .withDropzones(
        cx.dropzone
            .withDropzone('rating-bar-form-container')
            .withAllowedElements(require('../form'))
    );
