import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from "react-native";

import { auth } from "../../../firebase";

import React from "react";

import { useNavigation } from "@react-navigation/native";

export default function deliveryInfo(props) {
  let navigation = useNavigation();

  const { deliveryInfoModal, setDeliveryInfoModal } = props;

  const currentUser = auth.currentUser;

  if (currentUser) {
    // User is signed in

    // You can use this information to display user-specific data or perform other operations

    currentUser.address = "new address";

    console.log(currentUser);
  } else {
    // User is not signed in

    console.log("hello, No user is currently signed in.");
  }

  const DATA = [
    {
      id: "DeliveryInfoPage",

      title: "Add a New Address",

      //I want a specific modal to pop up based on the category pressed

      //
    },

    {
      id: "Payment Methods",

      title: "Payment Methods",

      //I want a specific modal to pop up based on the category pressed

      //
    },
  ];

  const Item = ({ title, onPress }) => (
    <TouchableOpacity
      onPress={() => {
        setDeliveryInfoModal(false);

        onPress();
      }}
    >
      <View style={{ height: 75 }}>
        <View
          style={[
            {
              display: "flex",

              flexDirection: "row",

              justifyContent: "space-between",
            },
          ]}
        >
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text
              style={[
                {
                  fontFamily: "Montserrat_700Bold",

                  marginTop: 12,

                  opacity: 0.8,

                  paddingLeft: 20,
                },
              ]}
            >
              {title}
            </Text>
          </View>

          <View style={{ marginTop: 12, paddingRight: 20 }}>
            <Image
              style={{ opacity: 0.8 }}
              source={require("../../../assets/moreThan.png")}
            />
          </View>
        </View>

        <View
          style={{
            height: 10,

            width: 390,

            borderBottomColor: "black",

            borderBottomWidth: 1,

            marginVertical: 10,

            shadowColor: "#000",

            shadowOffset: {
              width: 0,

              height: 4,
            },

            shadowOpacity: 0.35,

            shadowRadius: 3.84,

            elevation: 5,
          }}
        ></View>
      </View>
    </TouchableOpacity>
  );

  const handleReturnPress = () => {};

  const handleSearch = () => {};

  return (
    <View>
      <Modal
        visible={deliveryInfoModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setDeliveryInfoModal(false)}
        style={{ zIndex: 0, backgroundColor: "#82B77D" }}
      >
        <View style={styles.centeredView}>
          <View style={[styles.modalView, { height: "90%" }]}>
            <TouchableHighlight onPress={() => setDeliveryInfoModal(false)}>
              <Image
                source={require("../../../assets/close.png")}
                style={[styles.exit]}
              />
            </TouchableHighlight>

            <Text
              style={[
                styles.modalText,

                {
                  fontFamily: "K2D_600SemiBold",

                  textAlign: "center",

                  fontSize: 25,

                  width: "100%",
                },
              ]}
            >
              Where's your order going?
            </Text>

            <FlatList
              style={{
                height: 480,

                marginTop: 4,

                width: 370,

                marginLeft: 20,

                marginRight: 20,
              }}
              data={DATA}
              renderItem={({ item }) => (
                <Item
                  title={item.title}
                  onPress={() => {
                    navigation.navigate(item.id);

                    setDeliveryInfoModal(false);
                  }}
                />
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,

    justifyContent: "center",

    alignItems: "center",

    marginTop: 22,
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

      height: 2,
    },

    shadowOpacity: 0.25,

    shadowRadius: 4,

    elevation: 5,

    height: 130,

    width: 370,
  },

  button: {
    borderRadius: 20,

    padding: 10,

    elevation: 2,
  },

  buttonClose: {
    backgroundColor: "#2196F3",
  },

  textStyle: {
    color: "white",

    fontWeight: "bold",

    textAlign: "center",
  },

  modalText: {
    marginTop: 10,

    marginBottom: 15,

    textAlign: "center",
  },

  input: {
    height: 40,

    width: 285,

    margin: 6,

    borderWidth: 1,

    padding: 10,
  },

  exit: {
    position: "absolute",

    right: 155,

    bottom: 2,

    width: 20,

    height: 20,
  },

  image: {
    width: "100%",

    height: "100%",
  },
});
