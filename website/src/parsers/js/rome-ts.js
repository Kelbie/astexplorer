import defaultParserInterface from './utils/defaultESTreeParserInterface';
import pkg from 'babel-eslint/package.json';

const ID = 'rome-ts';

export default {
  ...defaultParserInterface,

  id: ID,
  displayName: ID,
  version: "0.0.25",
  homepage: "https://github.com/facebookexperimental/rome/",
  locationProps: new Set(['loc', 'start', 'end']),
  typeProps: new Set(['type']),
  showInMenu: true,

  loadParser(callback) {
    require(['./rome.js'], callback);
  },

  parse(parser, code) {
    const opts = {
      path: '',
      input: code,
      sourceType: 'module',
      syntax: ['ts', 'tsx']
    };

    return parser.parse(opts);
  },

  getNodeName(node) {
    return node.type;
  },

  nodeToRange(node) {
    if (node.loc) {
      return [node.loc.start.index, node.loc.end.index];
    }
  },

  getDefaultOptions() {
    return {
      jsx: true,
    };
  }
};
