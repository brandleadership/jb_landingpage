const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('content-video-tag')
    .withIcon(Icon.youtube)
    .withLabel('Video')
    .withDescription('Video Snippet')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.video
            .withId('303029be-6b08-11ed-a1eb-0242ac120002')
            .withLabel('Video Link')
    );
