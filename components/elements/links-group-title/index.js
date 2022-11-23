const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('content-links-group-title')
    .withIcon(Icon.heading)
    .withLabel('Title')
    .withDescription('For Links Group element')
    .withFile(require('./template.twig'))
    .withStyleConfigs(require('../../../configs/styles/link-group'))
    .withParts(
        cx.part.formattedText
            .withId('3534a6fa-6a87-11ed-a1eb-0242ac120002')
            .withLabel('Title Details')
            .withHtmlEditorConfig(
                require('../../../configs/styles/formatted-text-config')
            )
    );
