import { View, Text, StyleSheet } from "react-native";

function AppTitle() {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.subtitle}>THINGS TO DO IN</Text>
      <Text style={styles.title}>NIGHT CITY</Text>
    </View>
  );
}

export default AppTitle;

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 42,
    fontWeight: "700",
    marginTop: -15,
    color: "#FDF500",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    // fontStyle: "italic",
    color: "#37ebf3",
  },
});
