import { SafeAreaView } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import AppNavigator from './navigation/AppNavigator';
import getTheme from './theme/theme';
import { useAppSelector } from './hooks/redux.hook';

const MainApp = () => {
  const isDarkTheme = useAppSelector((state) => state.global.isDarkTheme);
  return (
    <PaperProvider theme={getTheme(isDarkTheme)}>
      <SafeAreaView style={{ flex: 1 }}>
        <AppNavigator />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default MainApp;
