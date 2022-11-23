const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('content-highlightbox')
    .withIcon(Icon.formfield)
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

// style.highlightbox-text-align.label=Align
// style.highlightbox-text-align.class.highlightbox-text-align-left.label=Left
// style.highlightbox-text-align.class.highlightbox-text-align-center.label=Center

// style.highlightbox-color-theme.label=Theme
// style.highlightbox-color-theme.class.highlightbox-bright.label=Bright
// style.highlightbox-color-theme.class.highlightbox-dark.label=Dark
// style.highlightbox-color-theme.class.highlightbox-stone.label=Stone

// # element.content-highlightbox.label=Rectangle
// # element.content-highlightbox.description=Title/Text in a box
// # element.content-highlightbox.icon=formfield
// element.content-highlightbox.styles=highlightbox-text-align,highlightbox-color-theme
// # element.content-highlightbox.parts.plain-text[0].label=Title
// # element.content-highlightbox.parts.plain-text[1].label=Content
