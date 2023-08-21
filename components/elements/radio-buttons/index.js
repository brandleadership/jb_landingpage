const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('radio-buttons')
    .withIcon(Icon.RADIOBUTTON)
    .withLabel('Radio Buttons')
    .withDescription('For Use In Form')
    .withFile(require('./template.twig'))
    .withParts(cx.part.formRadio.withLabel('Radio Button Details'));
