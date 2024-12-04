import { useState } from 'react';
import Cards from './components/Cards';
import Modal from './components/Modal';
import { students } from './data/StudentData';  // Import sample student data

const App = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Handle card click to set selected student
  const handleCardClick = (student) => {
    setSelectedStudent(student);
  };

  // Close modal by resetting selectedStudent to null
  const handleCloseModal = () => {
    setSelectedStudent(null);
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center mb-24">Student Performance</h1>
      {/* Heading */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 m-0">
        {students.map((student) => (
          <Cards 
            key={student.id} 
            student={student} 
            onClick={handleCardClick} 
          />
        ))}
        {/* Render a StudentCard for each student in the list */}
      </div>

      <Modal student={selectedStudent} onClose={handleCloseModal} />
      {/* Render Modal if a student is selected */}
    </div>
  );
};

export default App;
