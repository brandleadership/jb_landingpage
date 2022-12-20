const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('content-links-group')
    .withIcon(Icon.PILE)
    .withLabel('Links Group')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.plainText
            .withId('b52943d6-6a85-11ed-a1eb-0242ac120002')
            .withLabel('Title')
    );
