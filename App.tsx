import { Provider } from 'react-redux';
import Stack from './src/Nav/Stack';
import { mystore } from './src/Redux/store/store';
const App = () => {
  return (
    <Provider store={mystore}>
      <Stack/>
    </Provider>
  )
}

export default App