import React from "react";
import { FlatList, StyleSheet, Dimensions } from "react-native";

import CarItem from "./CarItem";
import { carData } from "../api/homeScreenData";

const CarItemList = () => {
  return (
    <FlatList
      data={carData}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => <CarItem name={item.name} url={item.url} />}
      snapToAlignment={"start"}
      decelerationRate={"normal"}
      snapToInterval={Dimensions.get("screen").height}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default CarItemList;

const styles = StyleSheet.create({});
