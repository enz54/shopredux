import {Provider} from 'react-redux'
import store from './redux/store'
import CakeContainer from './components/CakeContainer'
import HooksCakeContainer from './components/HooksCakeContainer'
import HookIceCreamContainer from './components/HookIceCreamContainer'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <CakeContainer />
      <HooksCakeContainer />
      <HookIceCreamContainer />
      </div>
    </Provider>

  );
}

export default App;
