import { View, Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "white",
    backgroundColor: "gray",
    opacity: 0.65,
    padding: 48,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  numberText: {
    color: "gold",
    fontSize: 36,
    fontWeight: "bold",
  },
});
