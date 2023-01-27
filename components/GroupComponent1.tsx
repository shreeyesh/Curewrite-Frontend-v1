import * as React from "react";
import {
  View,
  SafeAreaView,
  StyleProp,
  ViewStyle,
  Pressable,
  Text,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

type GroupComponent1Type = {
  style?: StyleProp<ViewStyle>;
};

const GroupComponent1 = ({ style }: GroupComponent1Type) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View>
        <Pressable onPress={() => navigation.navigate("NetworkLatest")}>
          <Text>PAPERS</Text>
        </Pressable>
        <TouchableHighlight
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => navigation.navigate("Vault")}
        >
          <Text>ARTICLES</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => navigation.navigate("NetworkPaper")}
        >
          <Text>LATEST</Text>
        </TouchableHighlight>
        <View />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default GroupComponent1;
