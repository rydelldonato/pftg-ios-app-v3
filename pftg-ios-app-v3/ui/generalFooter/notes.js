<View
  style={[
    styles.mainContainer,
    {
      display: "flex",
      flexDirection: "row",
      borderWidth: 1,
      borderColor: "black",
      justifyContent: "space-evenly",
    },
  ]}
>
  <View
    style={[
      styles.pages,
      {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        width: 100,
        margin: 10,
      },
    ]}
  >
    <Image source={require("../../assets/Home.png")} style={{}} />
    <Text>Home</Text>
  </View>
  <View
    style={[
      styles.pages,
      { display: "flex", flexDirection: "column", flex: 1, margin: 10 },
    ]}
  >
    <Image source={require("../../assets/purchase-order.png")} />

    <Text>Order</Text>
  </View>
  <View
    style={[
      styles.pages,
      { display: "flex", flexDirection: "column", flex: 1, margin: 10 },
    ]}
  >
    <Image source={require("../../assets/deals.png")} />

    <Text>Deals</Text>
  </View>
  <View
    style={[
      styles.pages,
      { display: "flex", flexDirection: "column", flex: 1, margin: 10 },
    ]}
  >
    <Image source={require("../../assets/more.png")} />

    <Text>More</Text>
  </View>
</View>;
