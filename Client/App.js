import { StyleSheet,View } from 'react-native';
import AppNavigation from './components/AppNavigation';
export default function App() {
  return (
    <>
    <AppNavigation/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});