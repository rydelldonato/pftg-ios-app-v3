import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './pages/welcome-page/welcome';
// import SignUp from './ui/signUpPopUp/signUp';
// import LoginPopUp from './ui/loginPopUp/loginPopUp';
// import GeneralFooter from './ui/generalFooter/generalFooter';
// import HomePage from './pages/home-page/homePage';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <SignUp/> */}
      {/* <LoginPopUp/> */}
      {/* <GeneralFooter/> */}
      {/* <HomePage/> */}
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
