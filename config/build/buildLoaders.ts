import type {RuleSetRule} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import type {BuildOptions} from "./types/config";
import {types} from "sass";
import Boolean = types.Boolean;

export function buildLoaders({isDev}: BuildOptions): RuleSetRule[] {
    const cssLoader =   {
            test: /\.s[ac]ss$/i,
            use: [
                isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            auto: (resPath: string) => !!(resPath.includes('.module.')),
                            localIdentName: isDev
                                ? '[path][name]__[local]--[hash:base64:5]'
                                : '[hash:base64:8]'
                        },
                    },
                },
                "sass-loader",
            ],
        };

    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        typeScriptLoader,
        cssLoader
    ]
}