import { View, FlatList, StyleSheet } from "react-native";
import GoalItem from "./GoalItem";

function GoalContainer(props) {
  return (
    <View style={styles.goalsContainer}>
      <FlatList
        data={props.courseGoals}
        renderItem={(itemData) => {
          return <GoalItem text={itemData.item.text} />;
        }}
      />
    </View>
  );
}

export default GoalContainer;

const styles = StyleSheet.create({
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
});
