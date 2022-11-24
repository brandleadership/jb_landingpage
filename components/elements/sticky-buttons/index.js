const { cx, Icon } = require('@bsi-cx/design-build')

module.exports = cx.contentElement
    .withElementId('content-sticky-buttons')
    .withIcon(Icon.CHAIN)
    .withLabel('Sticky Buttons')
    .withFile(require('./template.twig'))
    .withStyleConfigs(require('../../../configs/styles/sticky-button-display'))
    .withParts(
        cx.part.link
            .withId('78128094-6b06-11ed-a1eb-0242ac120002')
            .withLabel('First Link'),
        cx.part.link
            .withId('781285ee-6b06-11ed-a1eb-0242ac120002')
            .withLabel('Second Link')
    )
