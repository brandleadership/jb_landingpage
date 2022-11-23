const { cx } = require('@bsi-cx/design-build');

module.exports = cx.style
    .withIdentifier('Article-context')
    .withLabel('Context')
    .withCssClasses(
        cx.cssClass.withLabel('Content').withCssClass('content-context'),
        cx.cssClass.withLabel('Articles').withCssClass('articles-context')
    );
