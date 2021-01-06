import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';

export default function Contacts() {
  const [contacts, setContacts] = useState([])

  async function getData() {
    const resp = await fetch("http://localhost:3001/contacts");
    const data = await resp.json();
    setContacts(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>List of contacts</h1>
      <Table dark striped>
        <tbody>
          {contacts.map((contact) =>
            <tr key={contact.id}>
              <td>{contact.firstName}</td>
              <td>{contact.lastName}</td>
            </tr>)}
        </tbody>
      </Table>
    </div>
  )
}
