import React from 'react';
import { Table } from 'reactstrap';

export default function About() {
  const authors = [
    { name: "Eric", id: 1 },
    { name: "Jason", id: 2 },
    { name: "Mark", id: 3 },
  ];

  return (
    <div>
      <h1>About</h1>
      <p>This is the about page</p>
      <Table striped dark>
        <tbody>
          {authors.map((author) =>
            <tr key={author.id}>
              <td>{author.id}</td>
              <td>{author.name}</td>
            </tr>)}
        </tbody>
      </Table>
    </div>
  )
}
