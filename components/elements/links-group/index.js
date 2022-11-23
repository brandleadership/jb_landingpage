const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('content-links-group')
    .withIcon(Icon.pile)
    .withLabel('Links Group')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.plainText
            .withId('b52943d6-6a85-11ed-a1eb-0242ac120002')
            .withLabel('Title')
    );

// # element.content-links-group.label=Links Group
// # element.content-links-group.parts.plain-text[0].label=Title
// # element.content-links-group.icon=pile
