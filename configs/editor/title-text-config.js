const {
    EnterMode,
    Feature,
    Format,
    FontSizeUnit,
    cx,
    bsiProperty,
} = require('@bsi-cx/design-build');

module.exports = cx.htmlEditorConfig
    .withIdentifier('extendehfghfhdlegend')
    .withFeatures(
        Feature.BOLD,
        Feature.ITALIC,
        Feature.UNDERLINE,
        Feature.SUBSCRIPT,
        Feature.SUPERSCRIPT,
        Feature.FONT_SIZE,
        Feature.TEXT_COLOR,
        Feature.INSERT_LINK
    )
    .withTextColors('#141e55', '#22338b')
    .withFontSizes(8, 9, 10, 11, 12, 13, 14, 16, 18, 20, 21, 22, 23, 24)
    .withFontSizeUnit(FontSizeUnit.PX)
    .withFontSizeDefault(16)
    .withEnterMode(EnterMode.P);
