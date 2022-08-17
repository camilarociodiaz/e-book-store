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
    SansBlack: require('./assets/fonts/SourceSansPro-Black.ttf'),
    SansItalic: require('./assets/fonts/SourceSansPro-Italic.ttf'),
    SansSemiBold:require('./assets/fonts/SourceSansPro-SemiBold.ttf'),
    SansBoldItalic: require('./assets/fonts/SourceSansPro-SemiBoldItalic.ttf'),
  })

  if (!loaded) return <AppLoading />


  return (
    <Provider store={store}>
   <MainNavigator/>
   </Provider>
  );
}
