const path = require('path');

const {
    BuildConfig,
    ModuleConfig,
    WebpackConfigBuilder,
    Version,
    DesignType,
} = require('@bsi-cx/design-build');

const landingpageBuildConfig = new BuildConfig()
    .withName('JB_LP')
    .withVersion('v3.0.1')
    .withDesignType(DesignType.LANDINGPAGE)
    .withTargetVersion(Version.CX_22_0)
    .withRootPath(path.resolve(__dirname, 'templates', 'landingpage'))
    .withPropertiesFilePath('properties.js')
    .withModulesRootPath(path.resolve(__dirname, 'modules'))
    .withModules(
        new ModuleConfig()
            .withName('main')
            .withPath(
                path.resolve(
                    __dirname,
                    'templates',
                    'landingpage',
                    'modules',
                    'main.js'
                )
            ),
        new ModuleConfig().withName('root').withPath('root.js'),
        new ModuleConfig().withName('chart').withPath('chart.js'),
        new ModuleConfig()
            .withName('chart_freeform')
            .withPath('chart-freeform.js'),
        new ModuleConfig()
            .withName('chart_indexed')
            .withPath('chart-indexed.js')
    )
    .withAdditionalFilesToCopy(
        {
            from: path.resolve(__dirname, 'assets', 'img'), // copy from <project root>/files/**/*
            to: 'static/img', // copy to <output folder>/files/**/*
        },
        {
            from: path.resolve(
                __dirname,
                'templates',
                'landingpage',
                'preview.png'
            ),
            to: 'static/preview.png',
        }
    );

const websiteBuildConfig = new BuildConfig()
    .withName('website_JB_')
    .withVersion('v2.0.0')
    .withDesignType(DesignType.WEBSITE)
    .withTargetVersion(Version.CX_22_0)
    .withRootPath(path.resolve(__dirname, 'templates', 'website'))
    .withPropertiesFilePath('properties.js')
    .withModulesRootPath(path.resolve(__dirname, 'modules'))
    .withModules(
        new ModuleConfig()
            .withName('main')
            .withPath(
                path.resolve(
                    __dirname,
                    'templates',
                    'website',
                    'modules',
                    'main.js'
                )
            ),
        new ModuleConfig().withName('root').withPath('root.js'),
        new ModuleConfig().withName('chart').withPath('chart.js'),
        new ModuleConfig()
            .withName('chart_freeform')
            .withPath('chart-freeform.js'),
        new ModuleConfig()
            .withName('chart_indexed')
            .withPath('chart-indexed.js')
    )
    .withAdditionalFilesToCopy(
        {
            from: path.resolve(__dirname, 'assets', 'img'), // copy from <project root>/files/**/*
            to: 'static/img', // copy to <output folder>/files/**/*
        },

        {
            from: path.resolve(
                __dirname,
                'templates',
                'website',
                'preview.png'
            ),
            to: 'static/preview.png',
        }
    );

module.exports = WebpackConfigBuilder.fromConfigs(
    landingpageBuildConfig
        .clone()
        .withName('JB-LP-de-cx-22.0')
        .withPropertiesFilePath('lang-de.js'),
    landingpageBuildConfig
        .clone()
        .withName('JB-LP-en-cx-22.0')
        .withPropertiesFilePath('lang-en.js'),
    landingpageBuildConfig
        .clone()
        .withName('JB-LP-es-cx-22.0')
        .withPropertiesFilePath('lang-es.js'),
    landingpageBuildConfig
        .clone()
        .withName('JB-LP-fr-cx-22.0')
        .withPropertiesFilePath('lang-fr.js'),
    landingpageBuildConfig
        .clone()
        .withName('JB-LP-it-cx-22.0')
        .withPropertiesFilePath('lang-it.js'),
    websiteBuildConfig.clone().withName('JB-website-en-cx-22.0')
);
