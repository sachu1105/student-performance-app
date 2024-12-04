import { motion } from 'framer-motion';
import Graph from './Graph';  // Import the Graph component to display charts

// Modal component to display student details when a card is clicked
const Modal = ({ student, onClose }) => {
  if (!student) return null;  // Return null if no student is selected

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      // The modal overlay with center alignment
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // Framer Motion for fade-in/fade-out effect
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        {/* Modal content */}
        <button onClick={onClose} className="absolute top-4 right-4 text-xl font-bold text-gray-800 hover:text-red-600 transition-colors focus:outline-none"
        >
          X
        </button>
        {/* Close button */}
        <h2 className="text-2xl font-semibold">{student.name}</h2>
        <p className="text-gray-600">ID: {student.id}</p>
        <p className="text-gray-600">Attendance: {student.attendance}%</p>
        
        {/* Graph component to show student's grades and attendance */}
        <Graph grades={student.grades} attendance={student.attendance} />
      </div>
    </motion.div>
  );
};

export default Modal;
