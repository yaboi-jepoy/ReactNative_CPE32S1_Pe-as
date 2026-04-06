import { StyleSheet, Text, View, FlatList } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([
    // "Lost my mind",
    // "No one noticed",
    // "No one noticed...",
    // "It's getting old",
    // "All alone",
    // "May have lost it",
    // "I have lost it",
    // "No one tried",
    // "To read my eyes",
    // "No one but you",
    // "Wish it weren't true",
    // "Maybe i",
    // "It's not right",
    // "Make you mine",
    // "Take our time",
    // "Come one, dont leave me",
    // "It can't be that easy, babe",
    // "If you believe me, I guess I'll get on a plane",
    // "Fly to your city excited to see your face",
    // "Hold me, console me, then I'll leave without a trace",
    // "Come one, don't leave me, it can't be that easy, babe",
    // "If you believe me I guess I'll get on a plane",
    // "Fly to your city excited to see your face",
    // "Hold me, console me, and then I'll leave without a trace",
    // "Come one, don't leave me, it can't be that easy, babe",
    // "If you believe me I guess I'll get on a plane",
    // "Fly to your city excited to see your face",
    // "Hold me, console me, and then I'll leave without a trace",
    // "Come one, don't leave me, it can't be that easy, babe",
    // "If you believe me I guess I'll get on a plane",
    // "Fly to your city excited to see your face",
    // "Hold me, console me, and then I'll leave without a trace",
  ]);

  function addGoalHandler(enteredGoalText) {
    // console.log(enteredGoalText);
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.subtitle}>THINGS TO DO IN</Text>
        <Text style={styles.title}>NIGHT CITY</Text>
        <GoalInput onAddGoal={addGoalHandler} />
      </View>
      <Text style={styles.goalHeader}>Maybe I'd...</Text>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
          }}
        />
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
  goalsContainer: {
    borderTopColor: "#37ebf3",
    borderTopWidth: 1,
    borderBottomColor: "#37ebf3",
    borderBottomWidth: 1,
    paddingTop: 16,
    marginTop: 8,
    paddingBottom: 16,

    // the goalListContainer modifier
    height: 250,
    width: "100%",
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
