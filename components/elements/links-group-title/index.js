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

// # element.content-links-group-title.label=Title
// # element.content-links-group-title.description=For Links Group element
// # element.content-links-group-title.icon=heading

// # element.content-links-group-title.parts.formatted-text[0].label=Title Details

// element.content-links-group-title.parts.formatted-text.html-editor-config=content-title-configs

// style.links-group-title-styles.label=Link Group Title Style
// style.links-group-title-styles.class.default-links-group-title.label=Normal
// style.links-group-title-styles.class.uppercase-links-group-title.label=Uppercase Only

// element.content-links-group-title.styles=links-group-title-styles
