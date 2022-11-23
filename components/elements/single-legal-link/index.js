const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('content-single-link')
    .withIcon(Icon.chain)
    .withLabel('Single Legal Link')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.formattedText
            .withId('2f406314-6b05-11ed-a1eb-0242ac120002')
            .withLabel('Link Details')
            .withHtmlEditorConfig(
                require('../../../configs/styles/legal-link-text-config')
            )
    );