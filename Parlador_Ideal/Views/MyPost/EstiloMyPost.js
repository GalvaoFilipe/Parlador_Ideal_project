import {StyleSheet} from "react-native"

const estilo = StyleSheet.create({
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
    data:{
        color:"black",
        marginTop:16,
        marginLeft:16,
        fontSize:17,
    },
    main:{
        backgroundColor:"#bfbfbf",
        
    },
    toolbar:{
        justifyContent:"space-around",
        flexDirection:"row",
    }
    
    

})

export default estilo;