const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('risk-rating')
    .withIcon(Icon.SNIPPET)
    .withLabel('Risk Rating')
    .withFile(require('./template.twig'))
    .withStyleConfigs(require('../../../configs/styles/hightlighted-element'))
    .withParts(
        cx.part.plainText.withLabel('Heading'),
        cx.part.plainText.withLabel('Legend-1'),
        cx.part.plainText
            // .withId('bab11a9a-a879-11ed-afa1-0242ac120002')
            .withLabel('Legend-2'),
        cx.part.plainText
            // .withId('bab11ba8-a879-11ed-afa1-0242ac120002')
            .withLabel('Legend-3'),
        cx.part.plainText
            // .withId('bab11c98-a879-11ed-afa1-0242ac120002')
            .withLabel('Legend-4'),
        cx.part.plainText
            // .withId('bab11d88-a879-11ed-afa1-0242ac120002')
            .withLabel('Legend-5'),
        cx.part.plainText
            // .withId('bab11e82-a879-11ed-afa1-0242ac120002')
            .withLabel('Legend-6'),
        cx.part.plainText
            // .withId('bab123e6-a879-11ed-afa1-0242ac120002')
            .withLabel('Legend-7')
    );
