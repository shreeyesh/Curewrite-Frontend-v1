import * as React from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

type ChatCardsType = {
  userName?: string;
  bio?: string;
  rating?: string;
  reviewCount?: string;
};

const ChatCards = ({
  userName,
  bio = "bio",
  rating = "5",
  reviewCount,
}: ChatCardsType) => {
  const navigation = useNavigation();

  return (
    <TouchableHighlight
      style={[
        styles.groupTouchablehighlight,
        styles.groupLayout,
        styles.groupLayout1,
      ]}
      underlayColor="#fff"
      activeOpacity={0.2}
      onPress={() => navigation.navigate("NetworkMessages")}
    >
      <>
        <Image
          resizeMode="cover"
          source={require("../assets/rectangle-113.png")}
        />
        <Text>{bio}</Text>
        <Text>{userName}</Text>
        <View>
          <View>
            <Text>{reviewCount}</Text>
            <Text>{rating}</Text>
          </View>
          <Image
            resizeMode="cover"
            source={require("../assets/basics--star.png")}
          />
        </View>
      </>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  groupTouchablehighlight: {
    top: 407,
  },
});

export default ChatCards;
