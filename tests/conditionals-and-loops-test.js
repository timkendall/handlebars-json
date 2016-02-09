import test from 'ava';
import fs from 'fs';
import { transform } from '../source/HandlebarsToJSON';
import util from 'util';

const expected = [ { name: 'MyLayout',
    properties: null,
    children:
     [ { name: 'FancyHeader',
         properties: [ { key: 'text', value: 'Whatup this is a header.' } ],
         children: null },
       { name: 'Paragraph',
         properties: [ { key: 'text', value: 'Lorem ipsum hasdf aio4hsjj dfsdfggd.' } ],
         children: null },
       { name: 'each',
         properties: [ { key: 'blogPosts', value: null } ],
         children:
          [ { name: 'BlogPost',
              properties:
               [ { key: 'heading', value: null },
                 { key: 'subheading', value: null },
                 { key: 'url', value: null } ],
              children: null } ] },
       { name: 'if',
         properties: [ { key: 'registeredUser', value: null } ],
         children:
          [ { name: 'SpecialMessage',
              properties: [ { key: 'text', value: 'You\'re awesome!' } ],
              children: null } ] },
       { name: 'FancyFooter', properties: null, children: null } ] } ];

test('HandlebarsToJSON:transform() Handlebars are converted to JSON', (t) => {
    t.plan(1);
    const template = fs.readFileSync('./conditionals-and-loops.hbs', 'utf-8');
    const json = transform(template);

    console.log(util.inspect(json, { showHidden: false, depth: null }))

    t.same(json, expected);
});
