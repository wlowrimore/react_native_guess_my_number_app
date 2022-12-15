import { Text, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.darkTextBlue,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.darkTextBlue,
    padding: 8,
  },
});
