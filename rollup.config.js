import terser from '@rollup/plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
    input: 'public/js/main.js',
    output: {
        file: 'dist/bundle.js'
    },
    plugins: [
        terser(),
        nodeResolve({ browser: true })
    ]
};