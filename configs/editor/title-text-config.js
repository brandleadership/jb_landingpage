const {
    EnterMode,
    Feature,
    Format,
    FontSizeUnit,
    cx,
    bsiProperty,
} = require('@bsi-cx/design-build');

module.exports = cx.htmlEditorConfig
    .withIdentifier('extended')
    .withFeatures(
        Feature.BOLD,
        Feature.ITALIC,
        Feature.UNDERLINE,
        Feature.FONT_SIZE
    )
    .withFontSizes(14, 15, 16, 17, 18, 19, 20)
    .withFontSizeUnit(FontSizeUnit.PX)
    .withFontSizeDefault(14)
    .withLineHeights(1.1, 1.5)
    .withEnterMode(EnterMode.BR);
