import {StyleSheet} from "react-native"

const estilo = StyleSheet.create({
    fundo:{
        backgroundColor:"red",
    },
    posts:{
        backgroundColor:"white",
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom:15,
        
    },
    content:{
        marginLeft:30,
        marginRight:30,
        marginBottom:30,
        marginTop:14,
    },
    users:{
        color:"black",
        marginTop:16,
        marginLeft:16,
        fontSize:17,
    },
    main:{
        backgroundColor:"#bfbfbf",
        
    },
    botaoNew:{
        opacity:40,
        alignItems:"center",
    },
    header2:{
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"#0095f0",
        height:40,
        
        
    },header:{
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",
        backgroundColor:"#0095f0",

    },
    userBox:{        
        marginTop:16,
        marginBottom:16,
        marginRight:5,
        backgroundColor:"#b3e8ff",
        borderRadius:3,
    },
    user:{
        fontSize:20,
        color:"black",
        marginLeft:10,
        marginRight:10,
        fontWeight:"bold",
        fontStyle:"italic",
        
    }
    

})

export default estilo;