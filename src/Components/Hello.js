import React from 'react';

export function Hello({ fname, children: lname }) {
  return (
    <h1>
      Hello {fname} {lname} (jsx)
    </h1>
  );
}
