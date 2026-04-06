import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import GoalInput from "./components/GoalInput";
import AppTitle from "./components/AppTitle";
import GoalContainer from "./components/GoalContainer";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    // console.log(enteredGoalText);
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <AppTitle />
      <GoalInput onAddGoal={addGoalHandler} />
      <Text style={styles.goalHeader}>Maybe I'd...</Text>
      <GoalContainer courseGoals={courseGoals} />
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
  goalHeader: {
    margin: 8,
    fontSize: 18,
    fontWeight: "600",
    marginTop: 4,
    marginBottom: 0,
    color: "#37ebf3",
    textAlign: "center",
  },
});
