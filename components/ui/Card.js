import { View, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    marginHorizontal: 12,
    padding: 16,
    backgroundColor: Colors.primaryBlue,
    borderRadius: 8,
    elevation: 8, // Android Shadow

    // -------- IOS Shadow --------
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    // ----------------------------
  },
});