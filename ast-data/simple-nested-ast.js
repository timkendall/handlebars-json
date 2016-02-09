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
          // Double new line => blank line
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
          // Double new line => blank line
          { type: 'ContentStatement',
            original: '\n\n  ',
            value: '\n\n  ',
            loc:
             SourceLocation {
               source: undefined,
               start: { line: 4, column: 59 },
               end: { line: 6, column: 2 } } },
          // FancyFooter component
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
                  start: { line: 6, column: 4 },
                  end: { line: 6, column: 15 } } },
            params: [],
            hash: undefined,
            escaped: true,
            strip: { open: false, close: false },
            loc:
             SourceLocation {
               source: undefined,
               start: { line: 6, column: 2 },
               end: { line: 6, column: 17 } } },
          // New line
          { type: 'ContentStatement',
            original: '\n',
            value: '\n',
            loc:
             SourceLocation {
               source: undefined,
               start: { line: 6, column: 17 },
               end: { line: 7, column: 0 } },
            leftStripped: false } ],
       strip: {},
       loc:
        { source: undefined,
          start: { line: 1, column: 13 },
          end: { line: 7, column: 0 } },
       blockParams: undefined },
    inverse: undefined,
    openStrip: { open: false, close: false },
    inverseStrip: undefined,
    closeStrip: { open: false, close: false },
    loc:
     SourceLocation {
       source: undefined,
       start: { line: 1, column: 0 },
       end: { line: 7, column: 13 } } },
  // New line
  { type: 'ContentStatement',
    original: '\n',
    value: '',
    loc:
     SourceLocation {
       source: undefined,
       start: { line: 7, column: 13 },
       end: { line: 8, column: 0 } },
    rightStripped: true } ]
