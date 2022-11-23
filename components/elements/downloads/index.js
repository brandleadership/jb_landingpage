const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('content-downloads')
    .withIcon(Icon.pile)
    .withLabel('Downloads')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.plainText
            .withId('6115e3ba-6a7d-11ed-a1eb-0242ac120002')
            .withLabel('Title')
    );

// # element.content-downloads.label=Downloads
// # element.content-downloads.parts.plain-text[0].label=Title
// # element.content-downloads.icon=pile
