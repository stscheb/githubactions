import { useState } from 'react';
import { Rating } from '../lib';

export function App() {
  const [value, setValue] = useState(3);

  return (
    <main className="app">
      <h1>@stscheb/rating</h1>
      <p>A tiny, accessible star-rating component for React.</p>

      <Rating value={value} onChange={setValue} label="Rate this demo" />
      <p>Current value: {value}</p>

      <hr />

      <p>Read-only example (value 4):</p>
      <Rating value={4} readOnly label="Read-only example" />
    </main>
  );
}
