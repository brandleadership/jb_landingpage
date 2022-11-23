const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('header-text')
    .withIcon(Icon.text)
    .withLabel('Lead')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.plainText
            .withId('3d8a0464-6b11-11ed-a1eb-0242ac120002')
            .withLabel('Lead Details')
    );

// # element.header-text.label=Lead
// # element.header-text.icon=text
// # element.header-text.parts.plain-text[0].label=Lead Details
