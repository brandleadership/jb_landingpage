const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('content-links-group-item')
    .withIcon(Icon.chain)
    .withLabel('Links Group Item')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.link
            .withId('b5294610-6a85-11ed-a1eb-0242ac120002')
            .withLabel('Link to File')
    );
