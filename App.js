import React from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  SafeAreaView,
  Image,
} from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

const App = () => {
  const list = [
    {
      name: "Maya Hagan",
      num: "402-467-4633",
      Img: require("./assets/Mano.jpg"),
    },
    {
      name: "Melvin Forbis",
      num: "234-098-4567",
      Img: require("./assets/henry.jpg"),
    },

    {
      name: "Rick Novak",
      num: "234-198-4567",
      Img: require("./assets/nat.jpg"),
    },

    {
      name: "Marlene Donahue",
      num: "234-453-4567",
      Img: require("./assets/selly.png"),
    },
    {
      name: "John Habour",
      num: "234-387-4567",
      Img: require("./assets/bani.jpg"),
    },
    {
      name: "Susan Connor",
      num: "234-474-4567",
      Img: require("./assets/halo.jpg"),
    },
    {
      name: "Monica Broadbet",
      num: "234-838-4567",
      Img: require("./assets/ori.jpg"),
    },

    {
      name: "Magaret Adelman",
      num: "234-838-4567",
      Img: require("./assets/jona.jpg"),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={list}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => {
          return (
            <View style={styles.item}>
              <Image
                style={{ width: 60, height: 60, borderRadius: 30, right: 5 }}
                source={item.Img}
              />
              <View style={{ flex: 1, flexDirection: "column" }}>
                <Text style={{ fontSize: 20, fontWeight: "500" }}>
                  {item.name}
                </Text>
                <Text>{item.num}</Text>
              </View>
              <View style={styles.icons}>
                <Feather
                  style={{ marginRight: 20 }}
                  name="phone"
                  size={24}
                  color="#569FD4"
                /> 
                <MaterialCommunityIcons
                  style={{ marginRight: 20 }}
                  name="message-processing"
                  size={24}
                  color="#569FD4"
                />
                <Feather
                  style={{ marginRight: 10 }}
                  name="more-vertical"
                  size={24}
                  color="black"
                />
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
  },

  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 8,
    marginHorizontal: 16,
  },

  icons: {
    flex: 1,
    flexDirection: "row",
    left: 30,
  },

  title: {
    fontSize: 25,
  },

  num: {
    fontSize: 15,
  },
});

export default App;
