import React from "react";
import { FlatList, StyleSheet } from "react-native";

import CarItem from "./CarItem";
import homeScreenData from "../api/homeScreenData";

const CarItemList = () => {
  return (
    <FlatList
      data={homeScreenData}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => <CarItem name={item.name} url={item.url} />}
    />
  );
};

export default CarItemList;

const styles = StyleSheet.create({});
