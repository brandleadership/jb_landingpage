const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('header-text')
    .withIcon(Icon.TEXT)
    .withLabel('Lead')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.plainText
            .withId('3d8a0464-6b11-11ed-a1eb-0242ac120002')
            .withLabel('Lead Details')
    );
