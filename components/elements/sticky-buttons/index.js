const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('content-sticky-buttons')
    .withIcon(Icon.chain)
    .withLabel('Sticky Buttons')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.link
            .withId('78128094-6b06-11ed-a1eb-0242ac120002')
            .withLabel('First Link'),
        cx.part.link
            .withId('781285ee-6b06-11ed-a1eb-0242ac120002')
            .withLabel('Second Link')
    );

// style.display.label=Number of Buttons
// style.display.class.hide-button.label=One Button
// style.display.class.show-button.label=Two Buttons

// # element.content-sticky-buttons.label=Sticky Buttons
// # element.content-sticky-buttons.icon=chain
// # element.content-sticky-buttons.parts.link[0].label=First Link
// # element.content-sticky-buttons.parts.link[1].label=Second Link
// element.content-sticky-buttons.styles=display
