
import { CORE_CONCEPTS} from './data.js';
import CoreConcept from './Components/CoreConcept.jsx';
import Header from './Components/Header.jsx';


function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts!</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept{...CORE_CONCEPTS[1]}/>
            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
            <CoreConcept{...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
      </main>
    </div>
  );
} 

export default App;
