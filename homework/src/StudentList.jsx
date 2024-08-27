import React from 'react';
import ListItem from './ListItem.jsx';

function StudentList({ students, removePerson }) {
  return (
    <div>
      <h2>Студенты</h2>
      {students.map(student => (
        <ListItem key={student.id} person={student} removePerson={removePerson} />
      ))}
    </div>
  );
}

export default StudentList;
