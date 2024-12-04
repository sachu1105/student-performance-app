
// StudentCard component to display individual student information.
const Cards = ({ student, onClick }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden cursor-pointer border 	 shadow-lg bg-white p-6 hover:shadow-xl transition-shadow duration-300"
    onClick={() => onClick(student)} 
>
      <div className="flex flex-col items-center">
        {/* Image  */}
        {/* <img
          className="w-24 h-24 rounded-full border-2 border-gray-300 mb-4"
          src={student.imageUrl }
          alt={student.name}
        /> */}

      <h2 className="text-xl font-semibold text-gray-800">{student.name}</h2>
      <p className="text-gray-600">ID: {student.id}</p>
      <p className="text-gray-600">Grades: {student.grades.join(', ')}</p>

   
        </div>
    </div> 
    
  );
};

export default Cards;
