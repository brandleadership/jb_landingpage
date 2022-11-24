const { cx, Icon } = require('@bsi-cx/design-build')

module.exports = cx.contentElement
    .withElementId('footer-disclaimer')
    .withIcon(Icon.TEXTAREA)
    .withLabel('Disclaimer')
    .withDescription('For Footer')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.plainText
            .withId('30302e5a-6b08-11ed-a1eb-0242ac120002')
            .withLabel('Disclaimer Content')
    )
