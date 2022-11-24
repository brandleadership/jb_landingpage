const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('header-breadcrumb')
    .withIcon(Icon.info)
    .withLabel('Date, Author, Reading time')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.plainText
            .withId('f452e97e-6b0f-11ed-a1eb-0242ac120002')
            .withLabel('Publish-Date'),
        cx.part.plainText
            .withId('f452ed48-6b0f-11ed-a1eb-0242ac120002')
            .withLabel('Author'),
        cx.part.plainText
            .withId('f452ef14-6b0f-11ed-a1eb-0242ac120002')
            .withLabel('Estimated reading time')
    );
