const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('header-h1')
    .withIcon(Icon.HEADING)
    .withLabel('Header Title')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.plainText
            .withId('f452f0d6-6b0f-11ed-a1eb-0242ac120002')
            .withLabel('Title Details')
    );
