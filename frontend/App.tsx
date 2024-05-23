import * as React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import store from './src/redux/store';
import MainApp from './src/MainApp';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <MainApp />
    </ReduxProvider>
  );
};

export default App;
