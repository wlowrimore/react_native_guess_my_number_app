import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.primaryBlue,
    textAlign: "center",
    // borderWidth: 2,
    // borderColor: "whitesmoke",
    padding: 8,
  },
});
