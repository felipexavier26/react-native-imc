import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Form from './src/Form/Form' 
import Title from './src/Title/Title'


function App() {
  return (

    <View style={styles.container}>
      <StatusBar style="auto" />
      <Title/>
      <Form/>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop:80,
  },
});

export default App
