import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Pressable,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    console.log(enteredGoalText);
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
    setEnteredGoalText(""); // to clear the input after adding a goal
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.subtitle}>THINGS TO DO IN</Text>
        <Text style={styles.title}>NIGHT CITY</Text>
      </View>
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
      <View style={styles.goalsContainer}>
        <Text style={styles.goalHeader}>Maybe I'd...</Text>
        {courseGoals.map((goal) => (
          <Text style={styles.goals}>{goal}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 16,
    // paddingBottom: 24,
    // justifyContent: "center",
    backgroundColor: "#272932",
  },
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
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderColor: "#1ac5b0",
    padding: 8,
    // marginBottom: 24,
    // alignItems: "center",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#37ebf3",
    flex: 1,
    // marginRight: 8,
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
  goalsContainer: {
    alignItems: "center",
    borderTopColor: "#37ebf3",
    borderTopWidth: 1,
    borderBottomColor: "#37ebf3",
    borderBottomWidth: 1,
    paddingBottom: 16,
    marginTop: 16,
  },
  goalHeader: {
    margin: 8,
    fontSize: 18,
    fontWeight: "600",
    marginTop: 16,
    marginBottom: 12,
    color: "#37ebf3",
  },
  goals: {
    fontSize: 16,
    color: "#d1c5c0",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginBottom: 4,
    paddingHorizontal: 4,
  },
});
