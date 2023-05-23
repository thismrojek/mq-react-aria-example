import { AdobeAriaExample } from "./components/adobe-aria/AdobeAria";
import { RadixUIExample } from "./components/radix-ui/RadixUIExample";

function App() {
  

  return (
    <div style={{ padding: 50, maxWidth: '35%' }}>
      <h1>Howdy, Miquido!</h1>
      <p>Przegląd Unstyled Component Libraries</p>
      <AdobeAriaExample />
      <RadixUIExample />
    </div>
  );
}

export default App;
