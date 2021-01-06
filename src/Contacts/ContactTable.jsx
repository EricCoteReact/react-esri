import React from 'react';
import { Button, Table } from 'reactstrap';

export function ContactTable({ contacts, onDelete }) {
  return <Table dark striped>
    <tbody>
      {contacts.map((contact) => <tr key={contact.id}>
        <td>{contact.firstName}</td>
        <td>{contact.lastName}</td>
        <td><Button onClick={() => onDelete(contact.id)}>Delete</Button> </td>
      </tr>)}
    </tbody>
  </Table>;
}
