import React from 'react';

function ContactList({contacts}) {
  // const {contacts} = props;

  const formattedContacts = contacts.map((contact, index) => {
    return <li key={index}>{contact.firstName}</li>;
  });

  return (
    <ul>{formattedContacts}</ul>
  );
}

export default ContactList;

/**
 * props = {
 *    name: 'kyle'
 * }
 * 
 * props.name
 * 
 * const {name} = props;
 */