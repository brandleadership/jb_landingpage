const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('articles-content')
    .withIcon(Icon.text)
    .withLabel('Article')
    .withFile(require('./template.twig'))
    .withStyleConfigs(
        require('../../../configs/styles/sticky-button-display'),
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
    );

// style.articles-content-overlay.label=Show overlay
// style.articles-content-overlay.class.video-overlay-visible.label=Video
// style.articles-content-overlay.class.podcast-overlay-visible.label=Posdcast
// style.articles-content-overlay.class.overlay-hidden.label=None

// style.display-text.label=Display text
// style.display-text.class.text-shown.label=Shown
// style.display-text.class.text-hidden.label=Hidden

// element.articles-content.styles=articles-content-overlay,display-text

// # element.articles-content.label=Article
// # element.articles-content.icon=text
// # element.articles-content.parts.link[0].label=Article Link
// # element.articles-content.parts.link[1].label=Article Tag Link

// # element.articles-content.parts.image[0].label=Teaserimage
// # element.articles-content.parts.plain-text[0].label=Article Title
// # element.articles-content.parts.plain-text[1].label=Estimated reading time
// # element.articles-content.parts.formatted-text[0].label=Lead Text
