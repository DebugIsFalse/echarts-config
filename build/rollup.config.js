import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs'
export default {
    input : "./src/index.js",
    output : {
        file : './dist/echarts.config.js',
        format : 'iife',
        name : 'echartsConfig'
    },
    plugins: [ resolve(),commonjs() ]
}