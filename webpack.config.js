const path = require('path');

const {
    BuildConfig,
    ModuleConfig,
    WebpackConfigBuilder,
    Version,
    DesignType,
} = require('@bsi-cx/design-build');

module.exports = WebpackConfigBuilder.fromConfigs(
    new BuildConfig()
        .withName('jb-landingpage')
        .withVersion('2.0.0')
        .withDesignType(DesignType.LANDINGPAGE)
        .withTargetVersion(Version.CX_22_0)
        .withRootPath(path.resolve(__dirname, 'templates', 'landingpage'))
        .withPropertiesFilePath('properties.js')
        .withModules(new ModuleConfig().withName('main').withPath('main.js'))
    /* new BuildConfig()
        .withName('website')
        .withVersion('2.0.0')
        .withDesignType(DesignType.WEBSITE)
        .withTargetVersion(Version.CX_22_0)
        .withRootPath(path.resolve(__dirname, 'templates', 'website'))
        .withPropertiesFilePath('properties.js')
        .withModules(new ModuleConfig().withName('main').withPath('main.js')) */
);