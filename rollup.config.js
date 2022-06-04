import babel from 'rollup-plugin-babel';
import styles from 'rollup-plugin-styles';
import {terser} from 'rollup-plugin-terser';
import progress from 'rollup-plugin-progress';
import filesize from 'rollup-plugin-filesize';
import visualizer from 'rollup-plugin-visualizer';
import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: 'dist/index.js',
      format: 'umd',
      sourcemap: 'inline',
      name: 'rick-morty-plugin',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      }
    }
  ],
  external: ['react', 'react-dom'],
  plugins: [
    progress(),
    nodeResolve({
      browser: true
    }),
    babel({
      babelrc: false,
      presets: [['@babel/preset-react'], ['@babel/preset-env']],
    }),
    typescript({
      tsconfig: 'tsconfig.json',
      sourceMap: true,
      inlineSources: true,
    }),
    styles({
      modules: true
    }),
    filesize(),
    visualizer(),
    terser()
  ]
}