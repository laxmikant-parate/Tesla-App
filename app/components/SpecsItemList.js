import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Seperator from "./Seperator";
import SpecsItem from "./SpecsItem";

const SpecsItemList = ({ data }) => {
  return (
    <FlatList
      data={data}
      key={"#"}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <SpecsItem name={item.name} value={item.value} />
      )}
      ItemSeparatorComponent={() => <Seperator />}
    />
  );
};

export default SpecsItemList;

const styles = StyleSheet.create({});
