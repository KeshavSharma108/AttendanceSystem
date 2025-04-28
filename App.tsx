import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavigationStack from './src/navigation/NavigationStack';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationStack/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
