import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './pages/welcome-page/welcome';
import SignUp from './ui/signUpPopUp/signUp';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <SignUp/> */}
      <Welcome/>
      <StatusBar style="auto" />
    </View>
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
