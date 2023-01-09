const { cx, PageInclude } = require('@bsi-cx/design-build');

/**
 * @type {PageInclude}
 */
module.exports = cx.pageInclude
    .withName('Page')
    .withEditable(true)
    .withFile(require('./page.twig'))
    .withDropzones(
        cx.dropzone
            .withDropzone('header')
            .withMaxAllowedElements(1)
            .withAllowedElements(
                require('../../../../components/header/header-container')
            ),
        cx.dropzone
            .withDropzone('content')
            .withMaxAllowedElements(1)
            .withAllowedElements(
                require('../../../../components/elements/podcast-audio')
            ),
        //product-nav articlesalt-calltoaction-two content-printsubscribe content-text content-list-element content-video-tag content-sticky-buttons content-video-html content-quote content-text-image content-text-title-image content-text-title-image-alt content-image content-cta content-downloads content-download-item content-link-block content-links-group content-highlightbox content-highlightbox2 rectangle-advanced content-spacer content-table content-table-advanced content-title-lvl-one content-title-lvl-two content-title-lvl-three articles-image articles-image1 articles-image2 articles-imagewide
        cx.dropzone
            .withDropzone('articles')
            .withMaxAllowedElements(1)
            .withAllowedElements(
                require('../../../../components/elements/podcast-audio'),
                require('../../../../components/elements/sticky-buttons')
            ),
        //  articles-image articles-image1 articles-image2 articles-imagewide
        cx.dropzone
            .withDropzone('articlesalt')
            .withMaxAllowedElements(1)
            .withAllowedElements(
                require('../../../../components/elements/podcast-audio'),
                require('../../../../components/elements/single-legal-link'),
                require('../../../../components/elements/sticky-buttons'),
                require('../../../../components/alternative-elements/back-to-top')
            ),
        // articlesalt-optinoptout  articlesalt-confirm articlesalt-calltoaction articlesalt-calltoaction-two
        cx.dropzone
            .withDropzone('footer')
            .withMaxAllowedElements(1)
            .withAllowedElements(
                require('../../../../components/footer/footer-container')
            )
    );
