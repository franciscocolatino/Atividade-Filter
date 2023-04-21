import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
    },
    text: {
        alignItems: 'center',
        fontSize: 20,
        padding: 10
    },
    input: {
        borderRightWidth: 1,
        width: "75%",
        height: 50,
        padding: 10,
        fontSize: 25,
    }
})

export default styles;