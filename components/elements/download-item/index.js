const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('content-download-item')
    .withIcon(Icon.chain)
    .withLabel('Download Item')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.link
            .withId('6115e0cc-6a7d-11ed-a1eb-0242ac120002')
            .withLabel('Link to Article')
    );
