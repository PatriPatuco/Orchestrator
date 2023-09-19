//styles
import '../styles/__app.scss';
import taskData from "../services/taskData.json";
//components
import Project from './Project/Project';

function App() {
  return <Project taskData={taskData} />;
}

export default App;
