import { StyleSheet, Text } from "react-native";

function GoalItem(props) {
  return <Text style={styles.goals}>{props.text}</Text>;
}

export default GoalItem;

const styles = StyleSheet.create({
  goals: {
    fontSize: 16,
    color: "#d1c5c0",
    borderBottomColor: "grey",
    // borderBottomWidth: 1,
    marginBottom: 4,
    paddingHorizontal: 4,
    textAlign: "center",
  },
});
