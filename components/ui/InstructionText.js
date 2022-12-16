import { Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

function InstructionText({ children }) {
  return <Text style={styles.instructionText}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.primaryGreen,
    fontFamily: "open-sans",
    fontSize: 24,
    margin: 10,
  },
});
