import MainPage from './src/pages/MainPage'
import {View} from 'react-native'
import './global.css';

export default function App() {
  return (
    <View className="flex-1 mt-8">
      <MainPage/>
    </View>
  );
}
