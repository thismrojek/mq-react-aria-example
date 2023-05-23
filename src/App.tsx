import { Button } from './components/adobe-aria/button/Button';
import { Input } from './components/adobe-aria/input/Input';
import { ToggleButon } from './components/adobe-aria/toggle-button/ToggleButton';

function App() {
  return (
    <div>
      <header>
        Howdy, Miquido!
      </header>
      <main>
        <Button>Click me!</Button>
        <ToggleButon>Me too!</ToggleButon>
        <Input label="Your lovely name goes here..." description="We wanna know you good..." errorMessage="Komunikat błędu" />
      </main>
    </div>
  );
}

export default App;
