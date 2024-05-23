import './App.css';
import AppRouter from './routers/AppRouter';
import store  from './store/store';
import { Provider } from 'react-redux';
import './App.css';

function App() {
 

  return (
    <>
    <Provider store={store}>
            <AppRouter />
        </Provider>
    </>
  )
}

export default App
