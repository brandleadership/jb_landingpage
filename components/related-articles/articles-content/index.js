const { cx, Icon } = require('@bsi-cx/design-build')

module.exports = cx.contentElement
    .withElementId('articles-content')
    .withIcon(Icon.TEXT)
    .withLabel('Article')
    .withFile(require('./template.twig'))
    .withStyleConfigs(
        require('../../../configs/styles/articles-content-display-text'),
        require('../../../configs/styles/articles-content-overlay')
    )
    .withParts(
        cx.part.link
            .withId('19556e7e-6b13-11ed-a1eb-0242ac120002')
            .withLabel('Article Link'),
        cx.part.image
            .withId('19557392-6b13-11ed-a1eb-0242ac120002')
            .withLabel('Teaserimage'),
        cx.part.plainText
            .withId('195574c8-6b13-11ed-a1eb-0242ac120002')
            .withLabel('Article Title'),
        cx.part.formattedText
            .withId('3ab455e4-6b13-11ed-a1eb-0242ac120002')
            .withLabel('Lead Text')
            .withHtmlEditorConfig(
                require('../../../configs/styles/formatted-text-config')
            ),
        cx.part.link
            .withId('195571da-6b13-11ed-a1eb-0242ac120002')
            .withLabel('Article Tag Link'),
        cx.part.plainText
            .withId('19557db0-6b13-11ed-a1eb-0242ac120002')
            .withLabel('Estimated reading time')
    )
