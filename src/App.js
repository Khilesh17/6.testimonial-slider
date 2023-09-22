import './App.css';
import Testimonials from './components/Testimonials';
import reviews from './data';

function App() {
  return (
    <div className="app">
      <div className='container'>
        <h1 className='heading'>Our Testimonials</h1>
        <div className='line'></div>
        <Testimonials reviews = {reviews}></Testimonials>
      </div>
    </div>
  );
}

export default App;
