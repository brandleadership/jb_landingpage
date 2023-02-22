const {
    EnterMode,
    Feature,
    Format,
    FontSizeUnit,
    cx,
    bsiProperty,
} = require('@bsi-cx/design-build');

module.exports = cx.htmlEditorConfig
    .withIdentifier('extendedlegal')
    .withFeatures(
        Feature.BOLD,
        Feature.UNDERLINE,
        Feature.FONT_SIZE,
        Feature.LINE_HEIGHT,
        Feature.TEXT_COLOR,
        Feature.INSERT_LINK
    )
    .withTextColors('#22338b', '#000000')
    .withFontSizes(12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24)
    .withFontSizeUnit(FontSizeUnit.PX)
    .withFontSizeDefault(16)
    .withLineHeights(1.1, 1.5)
    .withEnterMode(EnterMode.BR);
