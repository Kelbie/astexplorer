import defaultParserInterface from './utils/defaultESTreeParserInterface';
import pkg from 'babel-eslint/package.json';

const ID = 'rome-flow';

export default {
  ...defaultParserInterface,

  id: ID,
  displayName: ID,
  version: "0",
  homepage: "https://github.com/facebookexperimental/rome/",
  locationProps: new Set(['loc', 'start', 'end', 'range']),
  showInMenu: true,

  loadParser(callback) {
    require(['./rome.js'], callback);
  },

  parse(parser, code) {
    const opts = {
      path: '',
      input: code,
      sourceType: 'module',
      syntax: ['flow']
    };

    const ast = parser.parseJS2(opts);
    return ast
  }
};
