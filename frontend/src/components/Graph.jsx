import { Line, Doughnut } from 'react-chartjs-2'; // Import chart components
import { Chart as ChartJS, CategoryScale,ArcElement, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(
    ArcElement, // Add this line
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
// Graph component to display grades and attendance data
const Graph = ({ grades, attendance }) => {
  const gradeData = {
    labels: ['Exam 1', 'Exam 2', 'Exam 3'],
    datasets: [
      {
        label: 'Grades',
        data: grades,  // Use the grades data passed as props
        borderColor: 'rgba(75, 192, 192, 1)',  // Set chart line color
        fill: false,  // Don't fill the area under the line
      },
    ],
  };

  const attendanceData = {
    labels: ['Present', 'Absent'],
    datasets: [
      {
        data: [attendance, 100 - attendance],  // Attendance data, 100 - attendance will give the absent value
        backgroundColor: ['#36A2EB', '#FF6384'],  // Colors for the doughnut chart
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Grades</h3>
        <Line data={gradeData} />
        {/* Line chart for grades */}
      </div>
      
      <div>
        <h3 className="text-lg font-semibold">Attendance</h3>
        <Doughnut data={attendanceData} />
        {/* Doughnut chart for attendance */}
      </div>
    </div>
  );
};

export default Graph;
