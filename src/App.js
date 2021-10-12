import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import firm from './components/data.json'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main firm={firm}></Main>
      <Footer></Footer>   
    </div>
  );
}

export default App;
