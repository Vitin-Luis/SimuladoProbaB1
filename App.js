import { createNativeStackNavigator } from '@react-navigation/native-stack';
import cartao1 from './src/pages/cartao1';
import cartao2 from './src/pages/cartao2';
import cartao3 from './src/pages/cartao3';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions = {{headerShown: false}}>
        <Stack.Screen name= 'cartao1' component = {cartao1}/>
        <Stack.Screen name='cartao2' component={cartao2}/>
        <Stack.Screen name='cartao3' component={cartao3}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
