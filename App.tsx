import * as React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import store from './src/redux/store';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PaperProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <AppNavigator />
        </SafeAreaView>
      </PaperProvider>
    </ReduxProvider>
  );
};

export default App;
