import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";

function App() {
  
  return (
    <> 
      <NavBar title="TextUtils"/>
      <div className="container my-3">
        <TextForm textArea="Enter text to analyze"/>
      </div>
      
    </>

  );
}

export default App;
