import { StyleSheet, TextInput, Pressable, View, Text } from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="What'd it be, choom?"
        style={styles.textInput}
        placeholderTextColor={"#d1c5c0"}
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Pressable style={styles.addPressable} onPress={addGoalHandler}>
        <Text style={styles.addText}>ADD</Text>
      </Pressable>
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderColor: "#1ac5b0",
    padding: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#37ebf3",
    flex: 1,
    padding: 13,
  },
  addPressable: {
    justifyContent: "center",
    width: "15%",
    alignItems: "center",
    backgroundColor: "#FDF500",
  },
  addText: {
    fontWeight: "400",
  },
});
