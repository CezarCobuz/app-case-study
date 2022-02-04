import "intl";
import "intl/locale-data/jsonp/en";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootNavigator } from "src/navigation/RootNavigator";
import useCachedResources from "./src/hooks/useCachedResources";
import { InventoryProvider } from "src/context/inventoryContext";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <InventoryProvider>
          <RootNavigator />
          <StatusBar />
        </InventoryProvider>
      </SafeAreaProvider>
    );
  }
}
