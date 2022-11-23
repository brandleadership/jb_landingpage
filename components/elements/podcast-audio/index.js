const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('podcast-audio')
    .withIcon(Icon.youtube)
    .withLabel('List element')
    .withDescription('Only change link')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.plainText
            .withId('c38df72c-6afe-11ed-a1eb-0242ac120002')
            .withLabel('Podcast Title'),
        cx.part.html
            .withId('c38df880-6afe-11ed-a1eb-0242ac120002')
            .withLabel('Audio Content')
    );

// # element.podcast-audio.label=Podcast Audio
// # element.podcast-audio.description=Only change link
// # element.podcast-audio.icon=youtube

// # element.podcast-audio.parts.plain-text[0].label=Podcast Title
// # element.podcast-audio.parts.html[0].label=Audio Content
