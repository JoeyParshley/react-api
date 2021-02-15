import React from 'react';
/*
  Contacts method accepts the contacts state and then returns a
  mapped version of the state, which loops over the bootstrap card
  to insert the contact's name email and catch phrase
*/
const Contacts = ({ contacts}) => {
  return (
    <div>
      <h1>Contact List</h1>
      {contact.map((contact) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{contact.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{contact.email}</h6>
            <p class="card-text">{contact.company.catchPhrase}</p>
          </div>
        </div>
      ))}
    </div>
  )
};
export default Contacts;
