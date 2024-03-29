const { cx, PageInclude } = require('@bsi-cx/design-build');

/**
 * @type {PageInclude}
 */
module.exports = cx.pageInclude
    .withName('Page')
    .withEditable(true)
    .withFile(require('./page.twig'))
    .withDropzones(
        // cx.dropzone
        //     .withDropzone('rational')
        //     .withMaxAllowedElements(1)
        //     .withAllowedElements(
        //         require('../../../../components/elements/rational-text')
        //     ),
        cx.dropzone
            .withDropzone('header')
            .withMaxAllowedElements(1)
            .withAllowedElements(
                require('../../../../components/header/header-container')
            ),
        cx.dropzone
            .withDropzone('content')
            .withAllowedElements(
                require('../../../../components/elements/podcast-audio'),
                require('../../../../components/includes/product-nav'),
                require('../../../../components/alternative-elements/cta-button-two'),
                require('../../../../components/elements/interaction-container'),
                require('../../../../components/elements/bodytext'),
                require('../../../../components/elements/list-element'),
                require('../../../../components/elements/video-tag'),
                require('../../../../components/elements/sticky-buttons'),
                require('../../../../components/elements/iframe-video'),
                require('../../../../components/elements/quote'),
                require('../../../../components/elements/image-with-legend'),
                require('../../../../components/elements/image-title-legend'),
                require('../../../../components/elements/image-headline-legend'),
                require('../../../../components/elements/image-element'),
                require('../../../../components/elements/contact-link'),
                require('../../../../components/elements/downloads'),
                require('../../../../components/elements/download-item'),
                require('../../../../components/elements/link-block'),
                require('../../../../components/elements/links-group'),
                require('../../../../components/elements/rectangle'),
                require('../../../../components/elements/rectangle-with-buttons'),
                require('../../../../components/elements/rectangle-advanced'),
                require('../../../../components/elements/divider'),
                require('../../../../components/elements/table'),
                require('../../../../components/elements/table-advanced'),
                require('../../../../components/elements/title-lvl-one'),
                require('../../../../components/elements/title-lvl-two'),
                require('../../../../components/elements/title-lvl-three'),
                require('../../../../components/related-articles/articles-3-columns'),
                require('../../../../components/related-articles/articles-1-column'),
                require('../../../../components/related-articles/articles-2-columns'),
                require('../../../../components/related-articles/articles-1-column-wide'),
                require('../../../../components/elements/chart'),
                require('../../../../components/elements/chart-freeform'),
                require('../../../../components/elements/chart-indexed'),
                require('../../../../components/elements/risk-rating-website')
            ),
        cx.dropzone
            .withDropzone('articles')
            .withMaxAllowedElements(1)
            .withAllowedElements(
                require('../../../../components/elements/podcast-audio'),
                require('../../../../components/elements/sticky-buttons'),
                require('../../../../components/related-articles/articles-3-columns'),
                require('../../../../components/related-articles/articles-1-column'),
                require('../../../../components/related-articles/articles-2-columns'),
                require('../../../../components/related-articles/articles-1-column-wide')
            ),
        cx.dropzone
            .withDropzone('articlesalt')
            .withMaxAllowedElements(1)
            .withAllowedElements(
                require('../../../../components/elements/podcast-audio'),
                require('../../../../components/elements/single-legal-link'),
                require('../../../../components/elements/sticky-buttons'),
                require('../../../../components/alternative-elements/back-to-top'),
                require('../../../../components/alternative-elements/optin-optout'),
                require('../../../../components/alternative-elements/wildcard'),
                require('../../../../components/alternative-elements/cta-button'),
                require('../../../../components/alternative-elements/cta-button-two')
            )
        // cx.dropzone
        //     .withDropzone('footer')
        //     .withAllowedElements(
        //         require('../../../../components/footer/footer-container-website')
        //     )
    );
