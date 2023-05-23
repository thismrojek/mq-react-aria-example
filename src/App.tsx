import { AdobeAriaExample } from "./components/adobe-aria/AdobeAria";
import { RadixUIExample } from "./components/radix-ui/RadixUIExample";
import { ReachUIExample } from "./components/reach-ui/ReachUIExample";

function App() {
  

  return (
    <div style={{ padding: 50, maxWidth: '35%' }}>
      <h1>Howdy, Miquido!</h1>
      <p>Przegląd Headless Components</p>
      <AdobeAriaExample />
      <ReachUIExample />
      <RadixUIExample />
    </div>
  );
}

export default App;
