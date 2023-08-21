const {
    EnterMode,
    Feature,
    Format,
    FontSizeUnit,
    cx,
    bsiProperty,
} = require('@bsi-cx/design-build');

module.exports = cx.htmlEditorConfig
    .withIdentifier('navigationbody')
    .withFeatures(
        Feature.BOLD,
        Feature.ITALIC,
        Feature.UNDERLINE,
        Feature.STRIKE_THROUGH,
        Feature.SUBSCRIPT,
        Feature.SUPERSCRIPT,
        Feature.FONT_SIZE,
        Feature.LINE_HEIGHT,
        Feature.TEXT_COLOR,
        Feature.BACKGROUND_COLOR,
        Feature.ALIGN_LEFT,
        Feature.ALIGN_CENTER,
        Feature.ALIGN_RIGHT,
        Feature.ALIGN_JUSTIFY,
        Feature.FORMAT_OL,
        Feature.FORMAT_UL,
        Feature.OUTDENT,
        Feature.INDENT,
        Feature.PARAGRAPH_FORMAT,
        Feature.QUOTE,
        Feature.SPECIAL_CHARACTERS,
        Feature.EMOTICONS,
        Feature.INSERT_LINK
    )
    .withTextColors('#000000', '#141e55', '#22338b', '#eeeeee')
    .withFontSizeUnit(FontSizeUnit.REM)
    .withFontSizeDefault(1.5)
    .withEnterMode(EnterMode.BR);
