const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('header-navigation-line')
    .withIcon(Icon.INFO)
    .withLabel('Navigation Line')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.formattedText
            .withLabel('Navigation Text')
            .withHtmlEditorConfig(
                require('../../../configs/editor/body-text-config')
            )
    );
