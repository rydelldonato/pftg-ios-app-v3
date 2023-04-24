import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    //     elevation: 5,
    //     height: 400,
    //     width: 370,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        marginTop: 10,
        elevation: 2
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      input: {
        height: 40,
        width: 285,
        margin: 15,
        borderWidth: 1,
        padding: 10,
      },
      exit:{
        color: "black",
        position: "absolute",
        right: 160,
        bottom: 4
      },
    });
    
    export default styles;