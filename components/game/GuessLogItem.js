import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>
        Opponent's Guess: <Text style={styles.guessText}>{guess}</Text>
      </Text>
    </View>
  );
}

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primaryBlue,
    borderWidth: 2,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.buttonBlue,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,

    // -------- Dropshadow for IOS -------- //
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },

  itemText: {
    fontSize: 16,
    fontFamily: "open-sans",
  },

  guessText: {
    color: "red",
    fontSize: 18,
  },
});
