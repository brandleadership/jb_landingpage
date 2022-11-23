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
