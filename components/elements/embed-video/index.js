const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('content-video')
    .withIcon(Icon.video)
    .withLabel('Embed-Video')
    .withDescription('External Videosource')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.video
            .withId('25c06760-6a80-11ed-a1eb-0242ac120002')
            .withLabel('Video-Source')
    );
