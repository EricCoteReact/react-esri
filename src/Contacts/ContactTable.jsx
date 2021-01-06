import React from 'react';
import { Table } from 'reactstrap';

export function ContactTable({ contacts, isFetching }) {
  return <Table dark striped>
    <tbody>
      {contacts.map((contact) => <tr key={contact.id}>
        <td>{contact.firstName}</td>
        <td>{contact.lastName}</td>
      </tr>)}
    </tbody>
  </Table>;
}
