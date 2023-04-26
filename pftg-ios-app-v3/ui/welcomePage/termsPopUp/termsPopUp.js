import { View, Text, Modal, TouchableHighlight } from "react-native";
import React from "react";
import styles from "./styles";
export default function termsPopUp(props) {
  const { termsModal, setTermsModal } = props;

  const handleCloseButton = () => {
    // window.alert("hello")
    setTermsModal(false);
  };

  return (
    <View
      style={[
        styles.termsModal,
        { justifyContent: "center", alignItems: "center" },
      ]}
    >
      <Modal
        animationType="fade"
        transparent={true}
        visible={termsModal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setTermsModal(!termsModal);
        }}
        style={{ zIndex: 1 }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text
              style={[
                styles.modalText,
                {
                  fontFamily: "K2D_600SemiBold",
                  textAlign: "center",
                  fontSize: 30,
                },
              ]}
            >
              Terms of Service and Privacy Policy
            </Text>
            <Text
              style={[
                styles.modalText,
                {
                  fontFamily: "K2D_400Regular",
                  textAlign: "center",
                  fontSize: 10,
                },
              ]}
            >
              Terms of Service (TOS): The terms of service, also known as terms
              of use or terms and conditions, are a set of rules and guidelines
              that govern the use of a website or application by its users. The
              TOS typically cover topics such as user behavior, prohibited
              activities, intellectual property rights, liability, and dispute
              resolution. By using the website or application, users agree to
              abide by the TOS. Privacy Policy: A privacy policy is a statement
              or legal document that describes how a website or application
              collects, uses, and protects the personal information of its
              users. Personal information may include name, email address, phone
              number, and other identifying information. The privacy policy
              should also detail how users can control their personal
              information and how the website or application complies with
              applicable privacy laws. By using the website or application,
              users agree to the privacy policy.
            </Text>
            <View>
              <TouchableHighlight
                onPress={handleCloseButton}
                style={[styles.button, { backgroundColor: "#FAEDCD" }]}
              >
                <Text
                  style={[
                    styles.buttontext,
                    {
                      fontFamily: "K2D_400Regular",
                      textAlign: "center",
                      fontSize: 15,
                    },
                  ]}
                >
                  Close
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
