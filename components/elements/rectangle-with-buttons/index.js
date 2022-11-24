const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('content-highlightbox2')
    .withIcon(Icon.communication)
    .withLabel('Rectangle with Buttons')
    .withDescription('Title/Text in a box with 2 buttons')
    .withFile(require('./template.twig'))
    .withStyleConfigs(
        require('../../../configs/styles/rectangle-with-button-align')
    )
    .withParts(
        cx.part.plainText
            .withId('2f405360-6b05-11ed-a1eb-0242ac120002')
            .withLabel('Title'),
        cx.part.plainText
            .withId('2f405734-6b05-11ed-a1eb-0242ac120002')
            .withLabel('Content'),
        cx.part.link
            .withId('2f405eb4-6b05-11ed-a1eb-0242ac120002')
            .withLabel('Label Left Button'),
        cx.part.link
            .withId('2f40610c-6b05-11ed-a1eb-0242ac120002')
            .withLabel('Label Right Button')
    );
