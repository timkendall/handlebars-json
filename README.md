# Handlebars-JSON

**Note: In progress. Not ready for use.**

This a simple parser built on top of [Handlebars](https://github.com/wycats/handlebars.js/) `parse()`. It emits simpler JSON objects.

## Installation

TODO

## Usage

```Handlebars
{{#MyLayout}}
  {{FancyHeader text="Whatup this is a header."}}

  {{Paragraph text="Lorem ipsum hasdf aio4hsjj dfsdfggd."}}

  {{FancyFooter}}
{{/MyLayout}}
```

```JavaScript
import { transform } from 'HandlebarsJSON';
const template = '...';

transform(template);
/**
==>
[{
  name: 'MyLayout',
  properties: null,
  children: [
    {
      name: 'FancyHeader',
      properties: [{ key: 'text', value: 'Whatup this is a header.' }],
      children: null
    },
    {
      name: 'Paragraph',
      properties: [{ key: 'text', value: 'Lorem ipsum hasdf aio4hsjj dfsdfggd.' }],
      children: null
    },
    {
      name: 'FancyFooter',
      properties: null,
      children: null
    }
  ]
}]
*/
```
## Testing

`npm run test`

## Building

TODO

## Contributing

TODO
