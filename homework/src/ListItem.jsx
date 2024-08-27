import React from 'react';

function ListItem({ person, removePerson }) {
  return (
    <div className="list-item">
      <p>Имя: {person.name}</p>
      <p>Возраст: {person.age}</p>
      <p>{person.course ? `Course: ${person.course}` : `Subject: ${person.subject}`}</p>
      <p>Телефон: {person.phone}</p>
      <p>Email: {person.email}</p>
      <button onClick={() => removePerson(person.id)}>Удалить</button>
    </div>
  );
}

export default ListItem;
