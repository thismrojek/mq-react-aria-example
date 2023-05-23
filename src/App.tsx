import { AdobeAriaExample } from "./components/adobe-aria/AdobeAria";
import { MUIBaseExample } from "./components/mui-base/MUIBaseExample";
import { RadixUIExample } from "./components/radix-ui/RadixUIExample";

function App() {
  

  return (
    <div style={{ padding: 50, maxWidth: '35%' }}>
      <h1>Howdy, Miquido!</h1>
      <p>Przegląd Unstyled Component Libraries</p>
      <AdobeAriaExample />
      <MUIBaseExample />
      <RadixUIExample />
    </div>
  );
}

export default App;
