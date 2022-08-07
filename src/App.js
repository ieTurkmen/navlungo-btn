import { StyledButtonDefault } from "./lib";


function App() {

  const handleSub = () => {

    console.log('Handle did')
  }
  return (
    <div className="App">
     <StyledButtonDefault label="tikla bana" onClick={handleSub}/>
    </div>
  );
}

export default App;
