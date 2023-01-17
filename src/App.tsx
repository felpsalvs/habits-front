import './styles/global.css'

import { Habit } from './components/Habit'

function App() {
  return (
    <div className="App">
      <Habit name="Read" description="Read a book" />
    </div>
  );
}

export default App;