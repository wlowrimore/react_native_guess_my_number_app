import { View, Image, Text, StyleSheet } from "react-native";

import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";

function GameOverScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title>RIGHT ON!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>x</Text> rounds to
        guess the number <Text style={styles.highlight}>y</Text>.
      </Text>
      <PrimaryButton>Start New Game</PrimaryButton>
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

  summaryText: {
    textAlign: "center",
    color: "black",
    fontFamily: "open-sans",
    fontSize: 24,
    marginBottom: 30,
  },

  highlight: {
    fontFamily: "open-sans-bold",
    color: "purple",
  },
});
