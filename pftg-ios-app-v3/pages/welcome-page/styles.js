import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  welcomePage: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#82B77D",
    alignItems: 'center',
  },
  logo: {
    marginTop: 100
  },
  titleContainer: {
    marginTop: 78,
    width: 319,
    height: 155,
    alignItems: "center"
  },
  subtitle:{
    marginTop: 52
  },
  buttonsContainer: {
    marginTop: 16,
    marginBottom: 6,
    width: 307,
    height: 100,
    justifyContent: "space-between"
  },
  button: {
    width: 307,
    height: 43,
    borderWidth: 1,
    borderRadius: 7,
    justifyContent: "center"
  },
});

export default styles;
