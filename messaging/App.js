import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Status from "./components/Status";

export default function App() {
  return (
    // container
    <View style={styles.container}>
      <Status />
      {/* content */}
      <View style={styles.content}>
        <Text>Messages Here</Text>
      </View>
      <View style={styles.inputMethodEditor}>
        <View style={styles.toolbar}>
          <Text>Toolbar</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  content: {
    flex: 1,
    backgroundColor: "white",
  },
  inputMethodEditor: {
    flex: 1,
    backgroundColor: "white",
  },
  toolbar: {
    borderTopWidth: 1,
    borderTopColor: "rgba(0,0,0,0.4)",
    backgroundColor: "white",
  },
});
