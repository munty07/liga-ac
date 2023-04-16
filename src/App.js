import CustomHeader from './CustomHeader';
import CustomFooter from './CustomFooter';
// import logoVideo from './logoVideo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <CustomHeader title={'Liga AC Player'}></CustomHeader>

      <main>
        Content
      </main>
      <CustomFooter />
      {/* daca nu avem nimic in tag (self closing) or <CustomFooter></CustomFooter> */}
    </div>
  );
}

export default App;
