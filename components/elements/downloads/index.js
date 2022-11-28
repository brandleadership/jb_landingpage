const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('content-downloads')
    .withIcon(Icon.PILE)
    .withLabel('Downloads')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.plainText
            .withId('6115e3ba-6a7d-11ed-a1eb-0242ac120002')
            .withLabel('Title')
    );
