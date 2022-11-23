const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('element-heading')
    .withIcon(Icon.snippet)
    .withLabel('Element Heading')
    .withDescription('For Advanced Table + Image')
    .withFile(require('./template.twig'))
    .withStyleConfigs(
        require('../../../configs/styles/heading-align'),
        require('../../../configs/styles/heading-body-text')
    )
    .withParts(
        cx.part.plainText
            .withId('6115e50e-6a7d-11ed-a1eb-0242ac120002')
            .withLabel('Legend, Title')
    );

// style.heading-alignment.label=Alignment Heading
// style.heading-alignment.class.module-content-gallery__content.label=Indented
// style.heading-alignment.class.element-heading-not-indented.label=Left-Aligned

// style.heading-styling.label=Heading Style
// style.heading-styling.class.element-heading-styling-classic.label=Classic
// style.heading-styling.class.element-heading-styling-bodytext.label=Bodytext Title

// element.element-heading.styles=heading-alignment,heading-styling
