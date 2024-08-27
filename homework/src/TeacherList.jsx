import React from 'react';
import ListItem from './ListItem.jsx';

function TeacherList({ teachers, removePerson }) {
  return (
    <div>
      <h2>Учителя</h2>
      {teachers.map(teacher => (
        <ListItem key={teacher.id} person={teacher} removePerson={removePerson} />
      ))}
    </div>
  );
}

export default TeacherList;
