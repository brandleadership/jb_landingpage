const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('content-highlightbox')
    .withIcon(Icon.formField)
    .withLabel('Rectangle')
    .withDescription('Title/Text in a box')
    .withFile(require('./template.twig'))
    .withStyleConfigs(
        require('../../../configs/styles/rectangle-align'),
        require('../../../configs/styles/rectangle-theme')
    )
    .withParts(
        cx.part.plainText
            .withId('4922e9ec-6b04-11ed-a1eb-0242ac120002')
            .withLabel('Title'),
        cx.part.plainText
            .withId('4922ee38-6b04-11ed-a1eb-0242ac120002')
            .withLabel('Content')
    );
