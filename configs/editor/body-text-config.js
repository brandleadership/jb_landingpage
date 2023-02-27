const {
    EnterMode,
    Feature,
    Format,
    FontSizeUnit,
    cx,
    bsiProperty,
} = require('@bsi-cx/design-build');

module.exports = cx.htmlEditorConfig
    .withIdentifier('extendedbody')
    .withFeatures(
        Feature.BOLD,
        Feature.SUBSCRIPT,
        Feature.SUPERSCRIPT,
        Feature.LINE_HEIGHT,
        Feature.TEXT_COLOR,
        Feature.FORMAT_OL,
        Feature.FORMAT_UL,
        Feature.INSERT_LINK
    )
    .withTextColors('#000000', '#141e55', '#22338b', '#eeeeee')
    .withFontSizeUnit(FontSizeUnit.REM)
    .withFontSizeDefault(1.5);
