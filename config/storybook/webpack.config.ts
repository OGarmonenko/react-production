import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';

import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

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
        '@': path.resolve(__dirname, '..', '..', 'src'),
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

    // config.resolve!.modules!.push(path.join(__dirname, '../node_modules'));

    config.plugins!.push(new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('https://testapi.ru'),
        __PROJECT__: JSON.stringify('storybook'),
    }));

    return config;
};
