import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "./styles";

export default function Result(props) {

    const onshare = async () => {
        const result = await Share.share({
            message: `Meu IMC hoje é ${props.ResultImc} , ${props.messaseResultImc}`
        })
    }
    return (
        <View style={styles.resultimc}>
            <View style={styles.boxsharebutton}>

                <Text style={styles.info}>{props.messaseResultImc}</Text>
                <Text style={styles.numberimc}>{props.ResultImc}</Text>
                
                <TouchableOpacity style={styles.shared}>
                    <Text style={styles.share} Text onPress={onshare}>
                        Compartilhar
                    </Text>
                </TouchableOpacity>
                <View />
            </View>
        </View>
    )
}

