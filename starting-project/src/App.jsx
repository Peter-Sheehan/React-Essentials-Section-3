import CoreConcepts from './Components/CoreConcept/CoreConcepts.jsx';
import Header from './Components/Header/Header.jsx';
import Examples from './Components/Examples.jsx';

function App() {

  return (
    <>                  {/*  <-- new fragment component to remove unnecessary div in dom */}
      <Header />
      <main>
        <CoreConcepts/> {/* <-- added a feature page to this component ( idk is this too much abstraction) I will leave the examples section for now */}
        <Examples/>
      </main>
    </>
  );
}

export default App;
