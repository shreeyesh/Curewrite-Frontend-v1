const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import AppStart from "./screens/AppStart";
import NetworkPaper from "./screens/NetworkPaper";
import Comments from "./screens/Comments";
import CommentsExt from "./screens/CommentsExt";
import Dot from "./screens/Dot";
import UserProfile from "./screens/UserProfile";
import CreateProfile from "./screens/CreateProfile";
import NetworkProfiles from "./screens/NetworkProfiles";
import NetworkProfiles1 from "./screens/NetworkProfiles1";
import ReadModeDownloadExt from "./screens/ReadModeDownloadExt";
import ProfileExt from "./screens/ProfileExt";
import Profile from "./screens/Profile";
import DatabaseSearchResult from "./screens/DatabaseSearchResult";
import NetworkPaymentMethod from "./screens/NetworkPaymentMethod";
import PaymentMethodExt from "./screens/PaymentMethodExt";
import PaymentMethod from "./screens/PaymentMethod";
import ReadModeDownload from "./screens/ReadModeDownload";
import ReadModeDownload1 from "./screens/ReadModeDownload1";
import Vault from "./screens/Vault";
import NetworkDoctorSearch from "./screens/NetworkDoctorSearch";
import NetworkLatest from "./screens/NetworkLatest";
import NetworkArticle from "./screens/NetworkArticle";
import NetworkMessages from "./screens/NetworkMessages";
import NetworkProfiles2 from "./screens/NetworkProfiles2";
import Database from "./screens/Database";
import Publish from "./screens/Publish";
import ReadModeDownload2 from "./screens/ReadModeDownload2";
import PaymentMethod1 from "./screens/PaymentMethod1";
import ReadModeDownload3 from "./screens/ReadModeDownload3";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded] = useFonts({
    "Nunito Sans": require("./assets/fonts/Nunito_Sans.ttf"),
    Poppins: require("./assets/fonts/Poppins.ttf"),
    Roboto: require("./assets/fonts/Roboto.ttf"),
    Raleway: require("./assets/fonts/Raleway.ttf"),
    Outfit: require("./assets/fonts/Outfit.ttf"),
    Inter: require("./assets/fonts/Inter.ttf"),
    "Roboto Mono": require("./assets/fonts/Roboto_Mono.ttf"),
  });

  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      }
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator
              initialRouteName="AppStart"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen
                name="AppStart"
                component={AppStart}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="NetworkPaper"
                component={NetworkPaper}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Comments"
                component={Comments}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CommentsExt"
                component={CommentsExt}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Dot"
                component={Dot}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="UserProfile"
                component={UserProfile}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CreateProfile"
                component={CreateProfile}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="NetworkProfiles"
                component={NetworkProfiles}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="NetworkProfiles1"
                component={NetworkProfiles1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ReadModeDownloadExt"
                component={ReadModeDownloadExt}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ProfileExt"
                component={ProfileExt}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Profile"
                component={Profile}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DatabaseSearchResult"
                component={DatabaseSearchResult}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="NetworkPaymentMethod"
                component={NetworkPaymentMethod}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PaymentMethodExt"
                component={PaymentMethodExt}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PaymentMethod"
                component={PaymentMethod}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ReadModeDownload"
                component={ReadModeDownload}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ReadModeDownload1"
                component={ReadModeDownload1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Vault"
                component={Vault}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="NetworkDoctorSearch"
                component={NetworkDoctorSearch}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="NetworkLatest"
                component={NetworkLatest}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="NetworkArticle"
                component={NetworkArticle}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="NetworkMessages"
                component={NetworkMessages}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="NetworkProfiles2"
                component={NetworkProfiles2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Database"
                component={Database}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Publish"
                component={Publish}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ReadModeDownload2"
                component={ReadModeDownload2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PaymentMethod1"
                component={PaymentMethod1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ReadModeDownload3"
                component={ReadModeDownload3}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : null}
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
export default App;
