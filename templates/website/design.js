require('./styles/styles.scss');

const { cx, SchemaVersion } = require('@bsi-cx/design-build');

module.exports = cx.design
    .withSchemaVersion(SchemaVersion.V_22_0)
    .withTitle('Website')
    .withAuthor('Gateb')
    .withDate('28.12.2022')
    .withPreviewImage('static/preview.png')
    .withRawDefaultLocale('en-CH')
    .withRawLocales('en-CH', 'de-CH', 'fr-CH', 'es-CH', 'it-CH', 'es')
    .withNLS(...require('./nls'))
    .withContentElementGroups(
        cx.contentElementGroup
            .withGroupId('header')
            .withLabel('Header Elements')
            .withContentElements(
                require('../../components/header/breadcrumb'),
                require('../../components/header/header-container'),
                require('../../components/header/header-h1'),
                require('../../components/header/header-image'),
                require('../../components/header/header-lead')
            ),
        cx.contentElementGroup
            .withGroupId('footer')
            .withLabel('Footer Elements')
            .withContentElements(
                require('../../components/footer/footer-container-website'),
                require('../../components/footer/disclaimer'),
                require('../../components/footer/footer-links-website'),
                require('../../components/footer/socials'),
                require('../../components/footer/legal-links-website')
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
                require('../../components/related-articles/articles-title')
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
            .withGroupId('elements')
            .withLabel('Content Elements')
            .withContentElements(
                require('../../components/elements/bodytext'),
                require('../../components/elements/contact-link'),
                require('../../components/elements/divider'),
                require('../../components/elements/download-item'),
                require('../../components/elements/downloads'),
                require('../../components/elements/element-heading'),
                require('../../components/elements/element-legend'),
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
                require('../../components/elements/print-subscribe'),
                require('../../components/elements/quote'),
                require('../../components/elements/rectangle'),
                require('../../components/elements/rectangle-with-buttons'),
                require('../../components/elements/rectangle-advanced'),
                require('../../components/elements/single-legal-link'),
                require('../../components/elements/social-follow'),
                require('../../components/elements/sticky-buttons'),
                require('../../components/elements/table'),
                require('../../components/elements/table-advanced'),
                require('../../components/elements/title-lvl-one'),
                require('../../components/elements/title-lvl-two'),
                require('../../components/elements/title-lvl-three'),
                require('../../components/elements/embed-video'),
                require('../../components/elements/iframe-video'),
                require('../../components/elements/video-tag'),
                require('../../components/elements/podcast-audio'),
                require('../../components/elements/chart'),
                require('../../components/elements/chart-freeform'),
                require('../../components/elements/chart-indexed'),
                require('../../components/elements/risk-rating-website'),
                require('../../components/elements/rational-text')
            ),
        cx.contentElementGroup
            .withGroupId('navigation')
            .withLabel('Product Navigation')
            .withContentElements(
                require('../../components/includes/product-nav')
            )
    )
    .withWebsite(
        cx.website
            .withMaxNavigationLevel(2)
            .withIncludes(
                require('./includes/rational-top-header'),
                require('./includes/page'),
                require('./includes/header'),
                require('./includes/product-nav'),
                require('./includes/navigation')
            )
    );
