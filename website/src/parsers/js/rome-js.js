import defaultParserInterface from './utils/defaultESTreeParserInterface';
import pkg from 'babel-eslint/package.json';

const ID = 'rome-js';

export default {
  ...defaultParserInterface,

  id: ID,
  displayName: ID,
  version: "0",
  homepage: "https://github.com/facebookexperimental/rome/",
  locationProps: new Set(['loc', 'start', 'end']),
  typeProps: new Set(['type']),
  showInMenu: true,

  loadParser(callback) {
    require(['./rome.js'], callback);
  },

  parse({parse}, code) {
    const opts = {
      path: '',
      input: code,
      sourceType: 'module',
      syntax: ['js', 'jsx']
    };

    const ast = parse(opts);
    
    return ast
  },

  getNodeName(node) {
    return node.type;
  },

  nodeToRange(node) {
    if (node.loc) {
      return [node.loc.start.index, node.loc.end.index];
    }
  }
};
