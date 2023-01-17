const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('risk-rating')
    .withIcon(Icon.SNIPPET)
    .withLabel('Risk Rating')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.plainText
            .withId('c565d5c6-9653-11ed-a1eb-0242ac120002')
            .withLabel('Title'),
        cx.part.plainText
            .withId('c565d5c6-9653-11ed-a1eb-0242ac120002')
            .withLabel('Legend, Title'),
        cx.part.plainText
            .withId('c565d5c6-9653-11ed-a1eb-0242ac120002')
            .withLabel('Legend, source-reference')
    );
