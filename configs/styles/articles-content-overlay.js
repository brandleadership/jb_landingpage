const { cx } = require('@bsi-cx/design-build');

module.exports = cx.style
    .withIdentifier('Article-content-overlay')
    .withLabel('Show overlay')
    .withCssClasses(
        cx.cssClass.withLabel('Video').withCssClass('video-overlay-visible'),
        cx.cssClass
            .withLabel('Posdcast')
            .withCssClass('podcast-overlay-visible'),
        cx.cssClass.withLabel('None').withCssClass('overlay-hidden')
    );
