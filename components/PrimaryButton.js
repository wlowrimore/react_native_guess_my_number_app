import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children }) {
  function pressHandler() {
    console.log("PRESSED!");
  }

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed] // Dependent Upon Android || IOS
            : styles.buttonInnerContainer
        }
        onPress={pressHandler}
        android_ripple={{ color: "#028CA1" }}
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
    margin: 4,
    overflow: "hidden",
  },

  buttonInnerContainer: {
    backgroundColor: "#8FC6C6",
    paddingVertical: 8,
    paddingHorizontal: 60,
    elevation: 2,
  },

  buttonText: {
    color: "#252B39",
    textAlign: "center",
  },

  // Button Pressed Effect for IOS
  pressed: {
    opacity: 0.75,
  },
});
