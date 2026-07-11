# @stscheb/rating

[![CI](https://github.com/stscheb/githubactions/actions/workflows/ci.yml/badge.svg)](https://github.com/stscheb/githubactions/actions/workflows/ci.yml)

A tiny, accessible star-rating component for React. Built as a learning project for CI and GitHub Actions.

- Live demo: https://stscheb.github.io/githubactions/
- Accessible `radiogroup` / `radio` semantics, hover preview, and a read-only mode

## Install

```sh
npm install @stscheb/rating
```

`react` and `react-dom` (v18 or v19) are peer dependencies you provide in your app.

## Usage

```tsx
import { useState } from 'react';
import { Rating } from '@stscheb/rating';

export function Example() {
  const [value, setValue] = useState(3);
  return <Rating value={value} onChange={setValue} />;
}
```

### Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `number` | required | Current rating (number of filled stars). |
| `max` | `number` | `5` | Total number of stars. |
| `onChange` | `(value: number) => void` | – | Called with the newly selected rating. |
| `readOnly` | `boolean` | `false` | Renders a non-interactive rating. |
| `label` | `string` | `'Rating'` | Accessible label for the group. |

## Development

```sh
npm install
npm run dev          # run the demo app
npm test             # run the test suite
npm run coverage     # tests with coverage
npm run build:lib    # build the publishable library into dist/
npm run build:demo   # build the demo app into dist-demo/
```

## License

MIT
