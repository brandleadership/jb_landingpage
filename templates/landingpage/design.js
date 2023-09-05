require('./styles/styles.scss');

const { cx, Locale } = require('@bsi-cx/design-build');

module.exports = cx.design
    .withTitle('JB Landing Page')
    .withAuthor('gateB')
    .withDate('23.11.2022')
    .withPreviewImage('static/preview.png')
    .withDefaultLocale(Locale.EN)
    .withLocales(Locale.EN, Locale.DE)
    .withContentElementGroups(
        cx.contentElementGroup
            .withGroupId('header')
            .withLabel('Header')
            .withContentElements(
                require('../../components/elements/header-logo'),
                require('../../components/header/breadcrumb'),
                require('../../components/header/header-container'),
                require('../../components/header/header-h1'),
                require('../../components/header/header-image'),
                require('../../components/header/header-lead'),
                require('../../components/header/navigation-line')
            ),
        cx.contentElementGroup
            .withGroupId('related-articles')
            .withLabel('Related Articles')
            .withContentElements(
                require('../../components/related-articles/articles-1-column'),
                require('../../components/related-articles/articles-1-column-wide'),
                require('../../components/related-articles/articles-2-columns'),
                require('../../components/related-articles/articles-3-columns'),
                require('../../components/related-articles/articles-content'),
                require('../../components/related-articles/articles-title'),
                require('../../components/related-articles/related-topic-tag'),
                require('../../components/related-articles/related-topics')
            ),
        cx.contentElementGroup
            .withGroupId('elements')
            .withLabel('Elements')
            .withContentElements(
                require('../../components/elements/bodytext'),
                require('../../components/elements/contact-link'),
                require('../../components/elements/divider'),
                require('../../components/elements/download-item'),
                require('../../components/elements/downloads'),
                require('../../components/elements/element-heading'),
                require('../../components/elements/element-legend'),
                require('../../components/elements/embed-video'),
                require('../../components/elements/iframe-video'),
                require('../../components/elements/image-element'),
                require('../../components/elements/image-headline-legend'),
                require('../../components/elements/image-title-legend'),
                require('../../components/elements/image-with-legend'),
                require('../../components/elements/interaction-container'),
                require('../../components/elements/link-block'),
                require('../../components/elements/links-group'),
                require('../../components/elements/links-group-item'),
                require('../../components/elements/links-group-title'),
                require('../../components/elements/list-element'),
                require('../../components/elements/podcast-audio'),
                require('../../components/elements/print-subscribe'),
                require('../../components/elements/quote'),
                require('../../components/elements/rectangle'),
                require('../../components/elements/rectangle-advanced'),
                require('../../components/elements/rectangle-with-buttons'),
                require('../../components/elements/risk-rating'),
                require('../../components/elements/single-legal-link'),
                require('../../components/elements/social-follow'),
                require('../../components/elements/sticky-buttons'),
                require('../../components/elements/table'),
                require('../../components/elements/table-advanced'),
                require('../../components/elements/title-lvl-one'),
                require('../../components/elements/title-lvl-three'),
                require('../../components/elements/title-lvl-two'),
                require('../../components/elements/video-tag'),
                require('../../components/elements/chart'),
                require('../../components/elements/chart-freeform'),
                require('../../components/elements/chart-indexed'),
                // require('../../components/elements/slider-two-el'),
                require('../../components/elements/mandate-table-title-legend'),
                require('../../components/elements/html-table-element'),
                require('../../components/elements/rational-text'),
                require('../../components/elements/horizontal-bar-chart'),
                require('../../components/elements/chart-pie'),
                // require('../../components/elements/slider-three-el'),
                require('../../components/elements/slider-transform'),
                require('../../components/elements/slider-two-el-transform'),
                // require('../../components/elements/rating-bar'),
                // require('../../components/elements/rating-element')
                require('../../components/elements/form'),
                require('../../components/elements/form-textarea'),
                require('../../components/elements/radio-buttons'),
                require('../../components/elements/rating-bar-form')
            ),
        cx.contentElementGroup
            .withGroupId('alternative-elements')
            .withLabel('Alternative Elements')
            .withContentElements(
                require('../../components/alternative-elements/back-to-top'),
                require('../../components/alternative-elements/cta-button'),
                require('../../components/alternative-elements/cta-button-two'),
                require('../../components/alternative-elements/optin-optout'),
                require('../../components/alternative-elements/wildcard')
            ),
        cx.contentElementGroup
            .withGroupId('footer')
            .withLabel('Footer')
            .withContentElements(
                require('../../components/footer/disclaimer'),
                require('../../components/footer/footer-container'),
                require('../../components/footer/footer-links'),
                require('../../components/footer/legal-links'),
                require('../../components/footer/socials')
            )
    )
    .withDropzones(
        cx.dropzone
            .withDropzone('header')
            .withAllowedElements(
                require('../../components/header/header-container')
            )
    );
