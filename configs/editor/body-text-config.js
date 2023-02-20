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
    .withTextColors(
        '#141e55',
        '#22338b',
        '#ffffff',
        '#333333',
        '#b0aa7e',
        '#eeeeee',
        '#001489',
        '#000000'
    )
    .withFormats(Format.P, Format.H2)
    .withFontSizes(8, 9, 10, 11, 12, 13, 14, 16, 18, 24, 30, 36, 48, 72)
    .withFontSizeUnit(FontSizeUnit.PX)
    .withFontSizeDefault(12)
    .withLineHeights(1.1, 1.2, 1.3, 1.4, 1.5)
    .withEnterMode(EnterMode.P);
