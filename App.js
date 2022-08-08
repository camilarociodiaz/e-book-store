import AppLoading from 'expo-app-loading';
import MainNavigator from './navigation/index';
import { Provider } from 'react-redux';
import store from './store'
import { useFonts } from 'expo-font';

export default function App() {


  const [loaded] = useFonts({
    SansLight: require('./assets/fonts/Source-Light.ttf'),
    SansRegular: require('./assets/fonts/SourceSansPro-Regular.ttf'),
    SansBold: require('./assets/fonts/SourceSansPro-Bold.ttf'),
    SansBlack: require('./assets/fonts/SourceSansPro-Black.ttf')
  })

  if (!loaded) return <AppLoading />


  return (
    <Provider store={store}>
   <MainNavigator/>
   </Provider>
  );
}
