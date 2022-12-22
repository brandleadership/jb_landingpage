const { cx, Icon, AbstractPart } = require('@bsi-cx/design-build');

/* At the moment, it's not possible to name the custom element parts.
Here's a few ideas we're trying out until we've figured out a solution with BSI. */

class JuliusbaerChartPart extends AbstractPart {
    constructor() {
        super(new Part('juliusbaer-chart'));
    }

    /**
     * Clone the configuration.
     *
     * @param {boolean} [shallow=true] - Create a shallow clone.
     * @returns {JuliusbaerChartPart}
     */

    clone(shallow) {
        return this._clone(new JuliusbaerChartPart(), shallow);
    }
}

module.exports = cx.contentElement
    .withElementId('chart')
    .withIcon(Icon.TABLE)
    .withLabel('Chart')
    .withFile(require('./template.twig'));
/* .withParts(
        new PlainTextPart().withLabel('Chart Title').withId('chart-title'),
        new JuliusbaerChartPart()
            .withLabel('Chart Config')
            .withId('chart-config')
    ) */
/* .withRawParts(
        {
            partId: 'juliusbaer-chart',
            label: 'Chart Config'
        },
        {
            partId: 'juliusbaer-chart',
            label: 'Chart Config'
        }
    ) */
