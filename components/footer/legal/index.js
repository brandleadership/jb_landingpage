const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('footer-legal')
    .withIcon(Icon.ASTERISK)
    .withLabel('Legal')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.link
            .withId('8f8991a4-6b0b-11ed-a1eb-0242ac120002')
            .withLabel('Data Privacy Policy'),
        cx.part.link
            .withId('8f899780-6b0b-11ed-a1eb-0242ac120002')
            .withLabel('Terms of Use'),
        cx.part.link
            .withId('8f899910-6b0b-11ed-a1eb-0242ac120002')
            .withLabel('News Alert')
    );
