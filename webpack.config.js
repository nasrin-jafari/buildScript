require("dotenv").config({ debug: false });
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
let webpack = require("webpack");

function formatCurrentDateTime() {
  const now = new Date();
  const persianDate = now.toISOString();
  return `${persianDate.replace(/:/g, "-")}`;
}

module.exports = (env) => {
  const target = process.env.BUILD_ENV || "Default";
  const isDev = target === "Default";

  return {
    entry: "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: `bundle.min.${formatCurrentDateTime()}.js`,
      publicPath: "/",
    },
    stats: "minimal",
    infrastructureLogging: {
      level: "warn",
    },
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      extensions: [".ts", ".tsx", ".js", ".jsx"],
      alias: {
        "@env-config": path.resolve(__dirname, "build/config.js"),
        "@components": path.resolve(__dirname, "src/components/"),
        "@utils": path.resolve(__dirname, "src/utils/"),
        "@assets": path.resolve(__dirname, "src/assets/"),
        "@enum": path.resolve(__dirname, "src/enum/"),
        "@hooks": path.resolve(__dirname, "src/hooks/"),
        "@constants": path.resolve(__dirname, "src/constants/"),
        "@styles": path.resolve(__dirname, "src/styles/"),
        "@apiManager": path.resolve(__dirname, "src/manager/apiManager/"),
        "@manager": path.resolve(__dirname, "src/manager/"),
        "@configs": path.resolve(__dirname, "src/configs"),
        "@types": path.resolve(__dirname, "src/types/types.ts"),
        "@themes": path.resolve(__dirname, "src/themes/"),
        "@i18n": path.resolve(__dirname, "src/i18n/"),
        "@locale": path.resolve(__dirname, "src/locale/"),
        "@mainReducer": path.resolve(__dirname, "src/mainReducer/"),
        "@config": path.resolve(__dirname, "src/config/"),
        "@util": path.resolve(__dirname, "src/util/"),
        "@pages": path.resolve(__dirname, "src/pages/"),
        "@itm": path.resolve(__dirname, "src/itm/"),
        "@routes": path.resolve(__dirname, "src/routes/"),
      },
    },
    devtool: isDev ? "eval-cheap-module-source-map" : "source-map",
    module: {
      rules: [
        {
          test: /\.(woff|woff2|ttf|eot|svg|gif|png)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "fonts/[name].[ext]",
              },
            },
          ],
        },
        {
          test: /\.(mp4|webm|ogg)$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "videos/[name].[hash].[ext]",
              },
            },
          ],
        },

        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
          use: [
            {
              loader: "ts-loader",
              options: { transpileOnly: true },
            },
          ],
        },
        {
          test: /\.css$/i,
          use: [
            {
              loader: "style-loader",
              options: {
                insert: "body",
              },
            },
            "css-loader",
          ],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            {
              loader: "style-loader",
              options: {
                insert: "body",
              },
            },
            "css-loader",
            "sass-loader",
          ],
        },
      ],
    },
    performance: {
      hints: false,
    },
    devServer: {
      host: "0.0.0.0",
      port: 9087,
      open: true,
      hot: true,
      historyApiFallback: true,
      static: {
        directory: path.resolve(__dirname, "public"),
      },
      watchFiles: ["src/**/*"],
      devMiddleware: {
        stats: "errors-only",
      },
    },
    mode: isDev ? "development" : "production",
    plugins: [
      new webpack.DefinePlugin({
        "process.env.BUILD_ENV": JSON.stringify(target),
        "process.env.SERVER_API_URL_DEV": JSON.stringify(process.env.SERVER_API_URL_DEV || ""),
      }),
      new CopyPlugin([
        {
          from: "./public",
          to: path.resolve(__dirname, "dist"),
        },
        {
          from: path.resolve(__dirname, "change_log.txt"),
          to: path.resolve(__dirname, "dist"),
          toType: "dir",
        },
      ]),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
    ],
  };
};