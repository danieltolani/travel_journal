// import logo from './logo.svg';
import Header from './components/header.js'
import MainComponent from './components/mainContent.js'
import data from './data.js'
import './App.css';

function App() {

  let bodyContent = data.map(item => {
    return <MainComponent 
    key= {item.title}
    {...item}  
    />
  })

  console.log(bodyContent)
  return (
    <div className="App">
      <Header className="App-header" />
      {bodyContent}
    </div>
  );
}

export default App;
