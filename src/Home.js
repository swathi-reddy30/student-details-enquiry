import React, { useState } from 'react';

const students = [
  { regNo: '1', name: 'John Doe', age: 20, course: 'Computer Science' },
  { regNo: '2', name: 'Jane Smith', age: 21, course: 'Mechanical Engineering' },
  { regNo: '3', name: 'Sam Wilson', age: 22, course: 'Electrical Engineering' },
  { regNo: '4', name: 'Emily Johnson', age: 23, course: 'Civil Engineering' },
  { regNo: '5', name: 'Michael Brown', age: 24, course: 'Information Technology' },
];

function Home() {
  const [regNo, setRegNo] = useState('');
  const [student, setStudent] = useState(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    const foundStudent = students.find(student => student.regNo === regNo.trim());
    setStudent(foundStudent);
    setSearched(true);
  };

  return (
    <div>
      <h2>Student Details Enquiry</h2>
      <input
        type="text"
        placeholder="Enter Registration Number (1-5)"
        value={regNo}
        onChange={(e) => setRegNo(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {searched && (
        student ? (
          <div>
            <h3>Student Details</h3>
            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>
            <p>Course: {student.course}</p>
          </div>
        ) : (
          <p>No student found with this RegNo.</p>
        )
      )}
    </div>
  );
}

export default Home;
