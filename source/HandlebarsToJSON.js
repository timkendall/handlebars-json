'use strict';
const Handlebars = require('handlebars');

function parseStatement(block) {
  if (!block) return {};

  const name = block.path.original;
  const properties = parseAttributesHash(block.hash);
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
  /** Ignore everything but MustacheStatement's. Eventually we will
      probably have to include logic to identify conditionals and
      loops. */
  return children.filter((child) => child.type === 'MustacheStatement');
}

function parseMustacheStatement(block) {
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

module.exports =  {
  transform(hbs) {
    const AST = Handlebars.parse(hbs);
    const body = AST.body || [];
    const blocks = body.filter((block) => block.type === 'BlockStatement');

    return blocks.map(parseStatement);
  }
}
