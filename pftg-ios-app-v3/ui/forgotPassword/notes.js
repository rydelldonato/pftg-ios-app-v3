<View>

      <View/>
    <Modal style={{zIndex: 2}} visible={modalVisible}>
          <View style={[styles.modalView, {justifyContent: "center", alignItems: "center" }]}>
          <View style={styles.centeredView}>
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
            Enter the email associated with your account to change your
            password.
          </Text>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          ></TextInput>
          <TouchableHighlight
            onPress={handleSubmit}
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
              Submit
            </Text>
          </TouchableHighlight>

          </View>
        </Modal>
      </View>
      ///
      