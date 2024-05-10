import React, { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, Vibration, Pressable, Keyboard,  } from "react-native"
import Result from "../Result//Result"
import styles from "./styles"


export default function Form(props) {

    const [height, setHeight] = useState(null)
    const [wieght, setWieght] = useState(null)
    const [messageImc, setMessageImc] = useState('Preencha o peso e a altura')
    const [imc, setImc] = useState(null)
    const [TextButon, setTextButton] = useState('Cacular')
    const [errorMessage, setErrorMessage] = useState(null)

    function imcCalcular() {
        let widthFormart = height.replace(",", ".")
        return setImc((wieght / (widthFormart * widthFormart)).toFixed(2))
    }

    function verificar() {
        if (imc === null) {
            Vibration.vibrate();
            setErrorMessage("Campo obrigadorio*")
        }
    }

    function validar() {
        if (wieght != null && height != null) {
            imcCalcular()
            setHeight(null)
            setWieght(null)
            setMessageImc("Seu é igual:")
            setTextButton("Calcular novamente")
            setErrorMessage(null)
        }
        else {
            verificar()
            setImc(null)
            setTextButton('Calcular')
            setMessageImc("Preencha o peso e altura")

        }
    }

    return (
        <View style={styles.formContent}>
            {imc == null ?
                <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                    <Text style={styles.formlabel}>Altura</Text>
                    <Text style={styles.errormessage}>{errorMessage}</Text>
                    <TextInput style={styles.input} placeholder="Ex. 1.75"
                        keyboardType="numeric"
                        onChangeText={setHeight}
                        value={height}
                    />

                    <Text style={styles.formlabel}>Peso</Text>
                    <Text style={styles.errormessage}>{errorMessage}</Text>
                    <TextInput style={styles.input} placeholder="Ex. 75.356"
                        keyboardType="numeric"
                        onChangeText={setWieght}
                        value={wieght} />

                    <TouchableOpacity style={styles.buttonCalcular}
                        onPress={() => validar()}>
                        <Text style={styles.buttonTextCalcular}>{TextButon}</Text>
                    </TouchableOpacity>

                </Pressable >
                :

                <View style={styles.exibresul}>
                    <Result messaseResultImc={messageImc} ResultImc={imc} />
                    <TouchableOpacity style={styles.buttonCalcular}
                        onPress={() => validar()}>
                        <Text style={styles.buttonTextCalcular}>{TextButon}</Text>
                    </TouchableOpacity>
                </View>
            }
        </View>

    )


}
