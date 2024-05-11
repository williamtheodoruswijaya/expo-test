import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const style = {
  container: "bg-primary h-full",
  text: "text-white",
};

export default function App() {
  return (
    <SafeAreaView className="bg-primary">
      <View className="flex-1 items-center justify-center"></View>
    </SafeAreaView>
  );
}
