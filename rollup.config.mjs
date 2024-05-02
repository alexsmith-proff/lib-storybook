// rollup.config.js
import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'
import terser from '@rollup/plugin-terser'
// const terser = require('@rollup/plugin-terser')
import dts from 'rollup-plugin-dts'

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/cjs/index.js',
                format: 'cjs'
            },
            {
                file: 'dist/esm/index.js',
                format: 'esm'
            }
        ],
        external: ['react'],
        plugins: [
            typescript({
                tsconfig: './tsconfig.json'
            }),
            postcss({
                extract: 'index.css',
                modules: true,
                use: ['sass']
            }),
            terser(),
        ]
    },
    {
        input: 'dist/esm/types/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: 'esm' }],
        external: [/\.(css|scss)$/],
        plugins: [dts()]
    }
];