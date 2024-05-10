import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContent: {
        flex: 1,
        backgroundColor: "#fff",
        marginTop: 30,
        alignItems: 'center',
        paddingTop: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    form: {
        width: '100%',
    },
    formlabel: {
        color: 'black',
        fontSize: 18,
        paddingLeft: 20,
    },
    input: {
        backgroundColor: '#f6f6f6',
        width: '90%',
        bordeRadius: 50,
        height: '40',
        margin: 12,
        paddingLeft: 10,
    },
    buttonCalcular: {
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: '#ff0043',
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginBottom: 30,
    },
    buttonTextCalcular: {
        fontSize: 15,
        color: 'white',
    },
    errormessage: {
        fontSize: 12,
        color: 'red',
        fontWeight: 'bold',
        paddingLeft: 20,
    },
    exibresul:{
        width: '100%',
        height: '50%',
    }

});

export default styles
