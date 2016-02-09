{ type: 'Program',
  body:
   [ { type: 'BlockStatement',
       path:
        { type: 'PathExpression',
          data: false,
          depth: 0,
          parts: [ 'MyLayout' ],
          original: 'MyLayout',
          loc:
           SourceLocation {
             source: undefined,
             start: { line: 1, column: 3 },
             end: { line: 1, column: 11 } } },
       params: [],
       hash: undefined,
       program:
        { type: 'Program',
          body:
           [
             // New line
             { type: 'ContentStatement',
               original: '\n  ',
               value: '  ',
               loc:
                SourceLocation {
                  source: undefined,
                  start: { line: 1, column: 13 },
                  end: { line: 2, column: 2 } },
               rightStripped: true },
            // FancyHeader component
             { type: 'MustacheStatement',
               path:
                { type: 'PathExpression',
                  data: false,
                  depth: 0,
                  parts: [ 'FancyHeader' ],
                  original: 'FancyHeader',
                  loc:
                   SourceLocation {
                     source: undefined,
                     start: { line: 2, column: 4 },
                     end: { line: 2, column: 15 } } },
               params: [],
               hash:
                { type: 'Hash',
                  pairs:
                   [ { type: 'HashPair',
                       key: 'text',
                       value:
                        { type: 'StringLiteral',
                          value: 'Whatup this is a header.',
                          original: 'Whatup this is a header.',
                          loc:
                           SourceLocation {
                             source: undefined,
                             start: { line: 2, column: 21 },
                             end: { line: 2, column: 47 } } },
                       loc:
                        SourceLocation {
                          source: undefined,
                          start: { line: 2, column: 16 },
                          end: { line: 2, column: 47 } } } ],
                  loc:
                   SourceLocation {
                     source: undefined,
                     start: { line: 2, column: 16 },
                     end: { line: 2, column: 47 } } },
               escaped: true,
               strip: { open: false, close: false },
               loc:
                SourceLocation {
                  source: undefined,
                  start: { line: 2, column: 2 },
                  end: { line: 2, column: 49 } } },
            // Blank line
             { type: 'ContentStatement',
               original: '\n\n  ',
               value: '\n\n  ',
               loc:
                SourceLocation {
                  source: undefined,
                  start: { line: 2, column: 49 },
                  end: { line: 4, column: 2 } } },
            // Paragraph component
             { type: 'MustacheStatement',
               path:
                { type: 'PathExpression',
                  data: false,
                  depth: 0,
                  parts: [ 'Paragraph' ],
                  original: 'Paragraph',
                  loc:
                   SourceLocation {
                     source: undefined,
                     start: { line: 4, column: 4 },
                     end: { line: 4, column: 13 } } },
               params: [],
               hash:
                { type: 'Hash',
                  pairs:
                   [ { type: 'HashPair',
                       key: 'text',
                       value:
                        { type: 'StringLiteral',
                          value: 'Lorem ipsum hasdf aio4hsjj dfsdfggd.',
                          original: 'Lorem ipsum hasdf aio4hsjj dfsdfggd.',
                          loc:
                           SourceLocation {
                             source: undefined,
                             start: { line: 4, column: 19 },
                             end: { line: 4, column: 57 } } },
                       loc:
                        SourceLocation {
                          source: undefined,
                          start: { line: 4, column: 14 },
                          end: { line: 4, column: 57 } } } ],
                  loc:
                   SourceLocation {
                     source: undefined,
                     start: { line: 4, column: 14 },
                     end: { line: 4, column: 57 } } },
               escaped: true,
               strip: { open: false, close: false },
               loc:
                SourceLocation {
                  source: undefined,
                  start: { line: 4, column: 2 },
                  end: { line: 4, column: 59 } } },
            // Blank line
             { type: 'ContentStatement',
               original: '\n\n  ',
               value: '\n\n',
               loc:
                SourceLocation {
                  source: undefined,
                  start: { line: 4, column: 59 },
                  end: { line: 6, column: 2 } },
               leftStripped: true },
             { type: 'BlockStatement',
               path:
                { type: 'PathExpression',
                  data: false,
                  depth: 0,
                  parts: [ 'each' ],
                  original: 'each',
                  loc:
                   SourceLocation {
                     source: undefined,
                     start: { line: 6, column: 5 },
                     end: { line: 6, column: 9 } } },
               params:
                [ { type: 'PathExpression',
                    data: false,
                    depth: 0,
                    parts: [ 'blogPosts' ],
                    original: 'blogPosts',
                    loc:
                     SourceLocation {
                       source: undefined,
                       start: { line: 6, column: 10 },
                       end: { line: 6, column: 19 } } } ],
               hash: undefined,
               program:
                { type: 'Program',
                  body:
                   [ { type: 'ContentStatement',
                       original: '\n    ',
                       value: '    ',
                       loc:
                        SourceLocation {
                          source: undefined,
                          start: { line: 6, column: 21 },
                          end: { line: 7, column: 4 } },
                       rightStripped: true },
                     { type: 'MustacheStatement',
                       path:
                        { type: 'PathExpression',
                          data: false,
                          depth: 0,
                          parts: [ 'BlogPost' ],
                          original: 'BlogPost',
                          loc:
                           SourceLocation {
                             source: undefined,
                             start: { line: 7, column: 6 },
                             end: { line: 7, column: 14 } } },
                       params:
                        [ { type: 'PathExpression',
                            data: false,
                            depth: 0,
                            parts: [ 'heading' ],
                            original: 'heading',
                            loc:
                             SourceLocation {
                               source: undefined,
                               start: { line: 7, column: 15 },
                               end: { line: 7, column: 22 } } },
                          { type: 'PathExpression',
                            data: false,
                            depth: 0,
                            parts: [ 'subheading' ],
                            original: 'subheading',
                            loc:
                             SourceLocation {
                               source: undefined,
                               start: { line: 7, column: 23 },
                               end: { line: 7, column: 33 } } },
                          { type: 'PathExpression',
                            data: false,
                            depth: 0,
                            parts: [ 'url' ],
                            original: 'url',
                            loc:
                             SourceLocation {
                               source: undefined,
                               start: { line: 7, column: 34 },
                               end: { line: 7, column: 37 } } } ],
                       hash: undefined,
                       escaped: true,
                       strip: { open: false, close: false },
                       loc:
                        SourceLocation {
                          source: undefined,
                          start: { line: 7, column: 4 },
                          end: { line: 7, column: 39 } } },
                     { type: 'ContentStatement',
                       original: '\n  ',
                       value: '\n',
                       loc:
                        SourceLocation {
                          source: undefined,
                          start: { line: 7, column: 39 },
                          end: { line: 8, column: 2 } },
                       leftStripped: true } ],
                  strip: {},
                  loc:
                   { source: undefined,
                     start: { line: 6, column: 21 },
                     end: { line: 8, column: 2 } },
                  blockParams: undefined },
               inverse: undefined,
               openStrip: { open: false, close: false },
               inverseStrip: undefined,
               closeStrip: { open: false, close: false },
               loc:
                SourceLocation {
                  source: undefined,
                  start: { line: 6, column: 2 },
                  end: { line: 8, column: 11 } } },
             { type: 'ContentStatement',
               original: '\n\n  ',
               value: '\n',
               loc:
                SourceLocation {
                  source: undefined,
                  start: { line: 8, column: 11 },
                  end: { line: 10, column: 2 } },
               rightStripped: true,
               leftStripped: true },
             { type: 'BlockStatement',
               path:
                { type: 'PathExpression',
                  data: false,
                  depth: 0,
                  parts: [ 'if' ],
                  original: 'if',
                  loc:
                   SourceLocation {
                     source: undefined,
                     start: { line: 10, column: 5 },
                     end: { line: 10, column: 7 } } },
               params:
                [ { type: 'PathExpression',
                    data: false,
                    depth: 0,
                    parts: [ 'registeredUser' ],
                    original: 'registeredUser',
                    loc:
                     SourceLocation {
                       source: undefined,
                       start: { line: 10, column: 8 },
                       end: { line: 10, column: 22 } } } ],
               hash: undefined,
               program:
                { type: 'Program',
                  body:
                   [ { type: 'ContentStatement',
                       original: '\n    ',
                       value: '    ',
                       loc:
                        SourceLocation {
                          source: undefined,
                          start: { line: 10, column: 24 },
                          end: { line: 11, column: 4 } },
                       rightStripped: true },
                     { type: 'MustacheStatement',
                       path:
                        { type: 'PathExpression',
                          data: false,
                          depth: 0,
                          parts: [ 'SpecialMessage' ],
                          original: 'SpecialMessage',
                          loc:
                           SourceLocation {
                             source: undefined,
                             start: { line: 11, column: 6 },
                             end: { line: 11, column: 20 } } },
                       params: [],
                       hash:
                        { type: 'Hash',
                          pairs:
                           [ { type: 'HashPair',
                               key: 'text',
                               value:
                                { type: 'StringLiteral',
                                  value: 'You\'re awesome!',
                                  original: 'You\'re awesome!',
                                  loc:
                                   SourceLocation {
                                     source: undefined,
                                     start: { line: 11, column: 26 },
                                     end: { line: 11, column: 43 } } },
                               loc:
                                SourceLocation {
                                  source: undefined,
                                  start: { line: 11, column: 21 },
                                  end: { line: 11, column: 43 } } } ],
                          loc:
                           SourceLocation {
                             source: undefined,
                             start: { line: 11, column: 21 },
                             end: { line: 11, column: 43 } } },
                       escaped: true,
                       strip: { open: false, close: false },
                       loc:
                        SourceLocation {
                          source: undefined,
                          start: { line: 11, column: 4 },
                          end: { line: 11, column: 45 } } },
                     { type: 'ContentStatement',
                       original: '\n  ',
                       value: '\n',
                       loc:
                        SourceLocation {
                          source: undefined,
                          start: { line: 11, column: 45 },
                          end: { line: 12, column: 2 } },
                       leftStripped: true } ],
                  strip: {},
                  loc:
                   { source: undefined,
                     start: { line: 10, column: 24 },
                     end: { line: 12, column: 2 } },
                  blockParams: undefined },
               inverse:
                { type: 'Program',
                  body:
                   [ { type: 'ContentStatement',
                       original: '\n    ',
                       value: '    ',
                       loc:
                        SourceLocation {
                          source: undefined,
                          start: { line: 12, column: 10 },
                          end: { line: 13, column: 4 } },
                       rightStripped: true },
                     { type: 'MustacheStatement',
                       path:
                        { type: 'PathExpression',
                          data: false,
                          depth: 0,
                          parts: [ 'DefaultMessage' ],
                          original: 'DefaultMessage',
                          loc:
                           SourceLocation {
                             source: undefined,
                             start: { line: 13, column: 6 },
                             end: { line: 13, column: 20 } } },
                       params: [],
                       hash:
                        { type: 'Hash',
                          pairs:
                           [ { type: 'HashPair',
                               key: 'text',
                               value:
                                { type: 'StringLiteral',
                                  value: 'Acorns rocks, you should register.',
                                  original: 'Acorns rocks, you should register.',
                                  loc:
                                   SourceLocation {
                                     source: undefined,
                                     start: { line: 13, column: 26 },
                                     end: { line: 13, column: 62 } } },
                               loc:
                                SourceLocation {
                                  source: undefined,
                                  start: { line: 13, column: 21 },
                                  end: { line: 13, column: 62 } } } ],
                          loc:
                           SourceLocation {
                             source: undefined,
                             start: { line: 13, column: 21 },
                             end: { line: 13, column: 62 } } },
                       escaped: true,
                       strip: { open: false, close: false },
                       loc:
                        SourceLocation {
                          source: undefined,
                          start: { line: 13, column: 4 },
                          end: { line: 13, column: 64 } } },
                     { type: 'ContentStatement',
                       original: '\n  ',
                       value: '\n',
                       loc:
                        SourceLocation {
                          source: undefined,
                          start: { line: 13, column: 64 },
                          end: { line: 14, column: 2 } },
                       leftStripped: true } ],
                  strip: {},
                  loc:
                   { source: undefined,
                     start: { line: 12, column: 10 },
                     end: { line: 14, column: 2 } } },
               openStrip: { open: false, close: false },
               inverseStrip: { open: false, close: false },
               closeStrip: { open: false, close: false },
               loc:
                SourceLocation {
                  source: undefined,
                  start: { line: 10, column: 2 },
                  end: { line: 14, column: 9 } } },
             { type: 'ContentStatement',
               original: '\n\n  ',
               value: '\n  ',
               loc:
                SourceLocation {
                  source: undefined,
                  start: { line: 14, column: 9 },
                  end: { line: 16, column: 2 } },
               rightStripped: true },
             { type: 'MustacheStatement',
               path:
                { type: 'PathExpression',
                  data: false,
                  depth: 0,
                  parts: [ 'FancyFooter' ],
                  original: 'FancyFooter',
                  loc:
                   SourceLocation {
                     source: undefined,
                     start: { line: 16, column: 4 },
                     end: { line: 16, column: 15 } } },
               params: [],
               hash: undefined,
               escaped: true,
               strip: { open: false, close: false },
               loc:
                SourceLocation {
                  source: undefined,
                  start: { line: 16, column: 2 },
                  end: { line: 16, column: 17 } } },
             { type: 'ContentStatement',
               original: '\n',
               value: '\n',
               loc:
                SourceLocation {
                  source: undefined,
                  start: { line: 16, column: 17 },
                  end: { line: 17, column: 0 } },
               leftStripped: false } ],
          strip: {},
          loc:
           { source: undefined,
             start: { line: 1, column: 13 },
             end: { line: 17, column: 0 } },
          blockParams: undefined },
       inverse: undefined,
       openStrip: { open: false, close: false },
       inverseStrip: undefined,
       closeStrip: { open: false, close: false },
       loc:
        SourceLocation {
          source: undefined,
          start: { line: 1, column: 0 },
          end: { line: 17, column: 13 } } },
     // New line
     { type: 'ContentStatement',
       original: '\n',
       value: '',
       loc:
        SourceLocation {
          source: undefined,
          start: { line: 17, column: 13 },
          end: { line: 18, column: 0 } },
       rightStripped: true } ],
  strip: {},
  loc:
   { source: undefined,
     start: { line: 1, column: 0 },
     end: { line: 18, column: 0 } } }
