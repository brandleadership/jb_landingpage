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

// style.highlightbox2-text-align.label=Align
// style.highlightbox2-text-align.class.highlightbox2-text-align-left.label=Left
// style.highlightbox2-text-align.class.highlightbox2-text-align-center.label=Center

// # element.content-highlightbox2.label=Rectangle with Buttons
// # element.content-highlightbox2.description=Title/Text in a box with 2 buttons
// # element.content-highlightbox2.icon=formfield
// element.content-highlightbox2.styles=highlightbox2-text-align
// # element.content-highlightbox2.parts.plain-text[0].label=Title
// # element.content-highlightbox2.parts.plain-text[1].label=Content
// # element.content-highlightbox2.parts.link[0].label=Label Left Button
// # element.content-highlightbox2.parts.link[1].label=Label Right Button
