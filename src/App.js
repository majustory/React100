import './App.css';
import Header from './Header';
import Nav from './Nav';
import Article from './Article';

function App() {
  const  topics =[
   {id:1, title:'html', body:'html is ....'},
   {id:2, title:'css', body:'css is ....'},
   {id:3, title:'javascript', body:'javascript is ....'}
  ]

  return (
    <div className="App">
      <Header  title="WEB" /> 
      <Header  title="APP" />  

      <Nav  topics={topics} /> 
      
      <Article  title="Welcome"  body="Hello, WEB" />  
      <Article  title="Hi"  body="Hello, App" />  
    </div>
  );
}

export default App;
