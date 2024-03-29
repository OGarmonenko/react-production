import path from 'path';

import webpack, { DefinePlugin, RuleSetRule } from 'webpack';

import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        locales: path.resolve(__dirname, '..', '..', 'public'),
        buildLocales: path.resolve(__dirname, '..', '..', 'public'),
    };

    config.resolve!.modules!.push(paths.src);
    config.resolve!.extensions!.push('.ts', '.tsx');
    // eslint-disable-next-line no-param-reassign
    config.resolve!.alias = {
        ...config!.resolve!.alias,
        '@': paths.src,
    };

    // eslint-disable-next-line no-param-reassign
    const rules = config.module!.rules as RuleSetRule[];
    config.module!.rules = rules!.map((rule) => {
        if (typeof rule === 'object' && /svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.(svg|png|jpe?g|gif)$/i };
        }
        return rule;
    });

    config!.module!.rules.push({
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
            name: '[path][name].[ext]',
        },
    });

    config.module!.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    config.module!.rules.push(buildCssLoader(true));

    config.plugins!.push(new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('https://testapi.ru'),
        __PROJECT__: JSON.stringify('storybook'),
    }));

    return config;
};
