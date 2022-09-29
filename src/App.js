import './App.css';
import Activity from './Components/Activity/Activity';
import Header from './Components/Header/Header';
import Question from './Components/Questions/Question';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Activity></Activity>
      <Question></Question>
    </div>
  );
}

export default App;
