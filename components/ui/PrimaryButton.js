import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed] // Dependent Upon Android || IOS
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.rippleBlue }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 10,
    overflow: "hidden",
  },

  buttonInnerContainer: {
    backgroundColor: Colors.buttonBlue,
    paddingVertical: 4,
    elevation: 2,
  },

  buttonText: {
    color: Colors.darkTextBlue,
    fontSize: 18,
    paddingHorizontal: 16,
    textAlign: "center",
  },

  // Button Pressed Effect for IOS
  pressed: {
    opacity: 0.75,
  },
});
