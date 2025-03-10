import React from 'react'
import { StyleSheet, Text, View ,StatusBar} from 'react-native'
import { Display } from '../utils'
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import Icon from "react-native-vector-icons/MaterialIcons"
const AboutSociety = ({navigation}) => {
    return (
        <View style={styles.container}>
            
            <StatusBar
            backgroundColor="grey"
            barStyle="light-content"
            />
             <View style={styles.headerContainer} > 
              <Feather name="menu" size={30}  color='#fff'  
             onPress={()=>navigation.goBack()} /> 
              
              <Text style={styles.headerTitle}>About Society</Text>
              </View>
            <View style={styles.boxcontainer}>
                <View style={styles.inputSubContainer}>
                <Icon name="group" size={22}
                    color='#0225A1'
                    style={{marginRight:10}}/>
                 <Text>society</Text>
                </View>
                <View style={styles.inputSubContainer}>
                <Ionicons name="documents" color='#0225A1' size={30}/>
                
                 <Text>society</Text>
                </View>
                <View style={styles.inputSubContainer}>
                
                <Ionicons name="location" color='#0225A1' size={30}/>
                 <Text>society</Text>
                </View>
                <View style={styles.inputSubContainer}>
                
                <Feather
                 name="calendar" size={22}
                 color='#0225A1'
                 />
                 <Text>society</Text>
                </View>
                <View style={styles.inputSubContainer}>
               
                <Icon name="fiber-pin" size={22}
                    color='#0225A1'
                    style={{marginRight:10}}/>
                 <Text>society</Text>
                </View>
            </View>
        </View>
    )
}

export default AboutSociety

const styles = StyleSheet.create({
    container:{
        
    },
    headerContainer:{
        flexDirection:'row' ,
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:30,
        paddingHorizontal:10,
        backgroundColor:"#0225A1",
        borderBottomWidth:1,
       borderRadius:20,
       marginTop:-20
   
     },
     headerTitle:{
       fontSize:20,
       lineHeight:20 * 1.4,
       width:Display.setWidth(80),
       textAlign:'center',
       color:'#fff'  
 
     },
       boxcontainer:{
           backgroundColor:'#DADADA',
           height:'60%',
           width:'80%',
           marginLeft:40,
           marginTop:60
       },
       inputContainer:{
        backgroundColor:'#F5F5F5',
        paddingHorizontal:10,
        marginHorizontal:20,
        borderRadius:8,
        borderWidth:0.5,
        borderColor:'black',
        justifyContent:'center',
        borderWidth:1,
        padding:10,
       marginBottom:-10
    },
    inputSubContainer:{
        flexDirection:'row',
        alignItems:'center',
        padding:10,
    },
    inputText:{
        fontSize:18,
        textAlignVertical:'center',
        padding:0,
        height:Display.setHeight(6),
        color:'black',
        flex:1

    },

})
