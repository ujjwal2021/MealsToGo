import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, Title } from "react-native-paper";
// import RestaurantImg from "../../../../assets/restaurant.jpg";
import { colors, spacing } from "../../../utils";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "some restaurant",
    icon,
    photos = [
      "https://www.shutterstock.com/image-photo/portrait-adult-businessman-sitting-restaurante-600w-1929645824.jpg",
    ],
    address = "100 some street",
    isOpenNow = true,
    rating,
    isClosedTemporarily,
  } = restaurant;
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    padding: spacing.md,
  },
  cover: {
    backgroundColor: colors.white,
  },
});
