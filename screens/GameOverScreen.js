import { View, Image, Text, StyleSheet } from "react-native";

import Title from "../components/ui/Title";
import Colors from "../constants/colors";

function GameOverScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title>YOU WON!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
        <Text>
          Your phone needed <Text>x</Text> rounds to guess the number{" "}
          <Text>y</Text>.
        </Text>
      </View>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  imageContainer: {
    width: 300,
    height: 300,
    borderWidth: 3,
    borderRadius: 150,
    borderColor: Colors.primaryBlue,
    overflow: "hidden",
    margin: 36,
  },

  image: {
    width: "100%",
    height: "100%",
  },
});
