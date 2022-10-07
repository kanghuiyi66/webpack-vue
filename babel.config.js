/**
 * @description
 * @author 康慧怡
 * @Date 2022/10/06
 */
module.exports = function (api) {
    api.cache(true);

    const presets = ['@babel/preset-env'];

    const plugins = [
        '@babel/plugin-transform-arrow-functions',
        '@babel/plugin-transform-runtime'
    ]

    return {
        presets,
        plugins
    }
}