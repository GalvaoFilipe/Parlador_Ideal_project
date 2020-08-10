import {StyleSheet, Dimensions} from "react-native"


const largura = Dimensions.get("screen").width;
const estilo = StyleSheet.create({
    container:{
        flexGrow:2,
        justifyContent:"center",
        alignItems:"center",
        marginTop:0,
        
    },
    inputs:{
        
        textAlign:"center",
        fontSize:20,
        marginTop:30,
        
    },
    botaoView:{
        alignItems:"center",
        marginTop:30,
       
    },
    newInput:{
        textAlign:"center",
        marginBottom:5

    },
    newButton:{
       
        alignItems:"center",
        justifyContent:"center",
        color: "#fff",
        
    }
})
export default estilo;