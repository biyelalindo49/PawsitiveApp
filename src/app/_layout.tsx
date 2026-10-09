
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: "#EEF2EF",
        },
        animation: "slide_from_right",
      }}
    />
  );
}