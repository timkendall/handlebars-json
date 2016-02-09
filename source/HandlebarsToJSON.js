'use strict';
const Handlebars = require('handlebars');

function parseStatement(block) {
  if (!block) return {};

  const name = block.path.original;
  const properties = parseProperties(block);
  let children;

  if (block.program) {
    const body = parseBody(block.program.body);
    children = body.map(parseStatement);
  } else {
    // Leaf node
    children = null;
  }

  return { name, properties, children };
}

function parseBody(children) {
  /** Ignore ContentStatement's for now because we only care about Handlebars. In
      the future we will probably want to parse these too. */
  return children.filter((child) => child.type !== 'ContentStatement');
}

function parseProperties(block) {
  if (block.hash) {
    return parseAttributesHash(block.hash);
  } else if (block.params) {
    return parseParamsArray(block.params);
  } else {
    return null;
  }
}

function parseAttributesHash(hash) {
  if (hash === undefined) return null;
  const keyPairs = hash.pairs;

  return keyPairs.map((keyPair) => {
    const key = keyPair.key;
    const value = keyPair.value.value;

    return { key, value };
  });
}

function parseParamsArray(array) {
  if (array.length === 0) return null;
  const keyPairs = array;

  return keyPairs.map((keyPair) => {
    const key = keyPair.original;
    /** These are to support `if` and `each` helpers. These helpers will
        have properties with no values (ex. `{{#each blogPosts}}`). */
    const value = null;

    return { key, value };
  });
}

module.exports =  {
  transform(hbs) {
    const AST = Handlebars.parse(hbs);
    const body = AST.body || [];
    const blocks = body.filter((block) => block.type === 'BlockStatement');

    return blocks.map(parseStatement);
  }
}
