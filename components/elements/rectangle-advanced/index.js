const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('rectangle-advanced')
    .withIcon(Icon.formfield)
    .withLabel('Rectangle Advanced')
    .withDescription('Element with One Dropzone')
    .withFile(require('./template.twig'));

// #styles
// style.rectangle-advanced-color-theme.label=Theme
// style.rectangle-advanced-color-theme.class.rectangle-advanced-bright.label=Bright
// style.rectangle-advanced-color-theme.class.rectangle-advanced-dark.label=Dark
// style.rectangle-advanced-color-theme.class.rectangle-advanced-stone.label=Stone
// #content elements
// element.rectangle-advanced.label=Rectangle Advanced
// element.rectangle-advanced.description=Element with One Dropzone
// element.rectangle-advanced.icon=formfield
// element.rectangle-advanced.styles=rectangle-advanced-color-theme
