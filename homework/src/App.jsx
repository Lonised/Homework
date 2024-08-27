import React, { useState, useRef } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import StudentList from './StudentList.jsx';
import TeacherList from './TeacherList.jsx';
import './App.css';

function App() {
  const [currentTab, setCurrentTab] = useState('students');
  const [students, setStudents] = useState([
    { id: 1, name: 'Марина', age: 20, course: 'Computer Science', phone: '7-777-777-77-77', email: '@example.com' },
    { id: 2, name: 'Мария', age: 22, course: 'Biology', phone: '7-777-777-77-77', email: '@example.com' },
    { id: 3, name: 'Антон', age: 21, course: 'Mathematics', phone: '7-777-777-77-77', email: '@example.com' },
    { id: 4, name: 'Ольга', age: 23, course: 'Chemistry', phone: '7-777-777-77-77', email: '@example.com' },
    { id: 5, name: 'Иван', age: 19, course: 'Physics', phone: '7-777-777-77-77', email: '@example.com' },
    { id: 6, name: 'Сергей', age: 22, course: 'Engineering', phone: '7-777-777-77-77', email: '@example.com' },
    { id: 7, name: 'Алексей', age: 20, course: 'Medicine', phone: '7-777-777-77-77', email: '@example.com' },
    { id: 8, name: 'Екатерина', age: 21, course: 'Economics', phone: '7-777-777-77-77', email: '@example.com' },
    { id: 9, name: 'Виктория', age: 24, course: 'Law', phone: '7-777-777-77-77', email: '@example.com' },
    { id: 10, name: 'Дмитрий', age: 22, course: 'Architecture', phone: '7-777-777-77-77', email: '@example.com' },
  ]);
  
  
  const [teachers, setTeachers] = useState([
    { id: 1, name: 'Елена', age: 45, subject: 'Mathematics', phone: '7-777-777-77-77', email: '@example.com' },
    { id: 2, name: 'Владимир', age: 40, subject: 'Physics', phone: '7-777-777-77-77', email: '@example.com' },
    { id: 3, name: 'Наталья', age: 50, subject: 'Chemistry', phone: '7-777-777-77-77', email: '@example.com' },
    { id: 4, name: 'Игорь', age: 38, subject: 'Biology', phone: '7-777-777-77-77', email: '@example.com' },
    { id: 5, name: 'Мария', age: 42, subject: 'History', phone: '7-777-777-77-77', email: '@example.com' },
    { id: 6, name: 'Александр', age: 44, subject: 'Geography', phone: '7-777-777-77-77', email: '@example.com' },
    { id: 7, name: 'Татьяна', age: 47, subject: 'Literature', phone: '7-777-777-77-77', email: '@example.com' },
    { id: 8, name: 'Олег', age: 39, subject: 'Physical Education', phone: '7-777-777-77-77', email: '@example.com' },
    { id: 9, name: 'Анна', age: 36, subject: 'English', phone: '7-777-777-77-77', email: '@example.com' },
    { id: 10, name: 'Виктор', age: 48, subject: 'Computer Science', phone: '7-777-777-77-77', email: '@example.com' },
  ]);
  

  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const additionalInfoRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);

  const addPerson = () => {
    const newPerson = {
      id: Date.now(),
      name: nameRef.current.value,
      age: ageRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
    };

    if (currentTab === 'students') {
      setStudents([...students, { ...newPerson, course: additionalInfoRef.current.value }]);
    } else {
      setTeachers([...teachers, { ...newPerson, subject: additionalInfoRef.current.value }]);
    }

    nameRef.current.value = '';
    ageRef.current.value = '';
    additionalInfoRef.current.value = '';
    phoneRef.current.value = '';
    emailRef.current.value = '';
  };

  const removePerson = (id) => {
    if (currentTab === 'students') {
      setStudents(students.filter(student => student.id !== id));
    } else {
      setTeachers(teachers.filter(teacher => teacher.id !== id));
    }
  };

  return (
    <div className="app">
      <Header />
      <div className="tabs">
        <button onClick={() => setCurrentTab('students')}>Студенты</button>
        <button onClick={() => setCurrentTab('teachers')}>Учителя</button>
      </div>
      <div className="content">
        {currentTab === 'students' ? (
          <StudentList students={students} removePerson={removePerson} />
        ) : (
          <TeacherList teachers={teachers} removePerson={removePerson} />
        )}
      </div>
      <div className="form">
        <input ref={nameRef} type="text" placeholder="Имя" />
        <input ref={ageRef} type="number" placeholder="Возраст" />
        <input ref={additionalInfoRef} type="text" placeholder={currentTab === 'students' ? 'Курс' : 'Дисциплина'} />
        <input ref={phoneRef} type="text" placeholder="Телефон" />
        <input ref={emailRef} type="email" placeholder="Email" />
        <button onClick={addPerson}>Добавить {currentTab === 'students' ? 'Студента' : 'Преподавателя'}</button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
