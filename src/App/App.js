import logo from '../logo.svg';
import './App.css';
import Course from '../Course/Course';
import CourseItem from '../Course/CourseItem/CourseItem';

function App({ bgColor }) {

  var courses = [
    {
      name: 'react',
      id: 1,
      description: "REacrt framework"
    },
    {
      name: 'flutter',
      id: 2
    },
    {
      name: 'python',
      id: 3
    }
  ];

  const courseItem = {
    name: 'Varun',
    id: 1
  };

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <div>
        <Course courses={courses} />
      </div>
      <CourseItem item={courseItem}/>
    </div>
  );
}

export default App;
