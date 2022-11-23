const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('content-video-html')
    .withIcon(Icon.metadata)
    .withLabel('iframe-Video')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.html
            .withId('25c0663e-6a80-11ed-a1eb-0242ac120002')
            .withLabel('iframe-Video-Source')
    );

// # element.content-video-html.label=iframe-Video
// # element.content-video-html.icon=metadata
// # element.content-video-html.parts.html[0].label=iframe-Video-Source
