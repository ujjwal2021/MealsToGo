import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { spacing } from "../../../utils";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard.component";

export const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar placeholder="Search restaurants" />
      </View>
      <View style={styles.list}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  search: {
    padding: spacing.md,
  },
  list: {
    flex: 1,
    padding: spacing.md,
    // backgroundColor: colors.blue,
  },
});
