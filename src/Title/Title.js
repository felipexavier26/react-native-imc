import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

function Title(){
    return (
        <View style={styles.boxTile}>
            <Text style={styles.textTile}>
                IMC
            </Text>
        </View>
    )
}

export default Title;