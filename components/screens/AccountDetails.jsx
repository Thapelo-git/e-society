import React,{useState} from 'react'
import { StyleSheet, Text, View,SafeAreaView ,StatusBar,TextInput,
TouchableOpacity} from 'react-native'
import { Formik } from 'formik';
import * as yup from 'yup'
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import Icon from "react-native-vector-icons/MaterialIcons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import {Display} from '../utils'
const AccountDetails = ({navigation}) => {
    const [isPasswordShow,setPasswordShow]=useState(false)
    const [isSelected,setSelection]=useState(false)
    const ReviewSchem =yup.object({
        user:yup.string().required().min(6),
        email:yup.string().required().min(6),
        phonenumber:yup.string().required().min(10),
        password:yup.string().required().min(6),
        confirmpassword:yup.string().required().min(6),
    })
    return (
        
        <SafeAreaView>
            <StatusBar
            backgroundColor="#0225A1"
            barStyle="light-content"
            />
              
              <View style={styles.headerContainer} > 
              <Feather name="arrow-left" size={30}
             onPress={()=>navigation.goBack()} /> 
              
              <Text style={styles.headerTitle}>Account Settings</Text>
              </View>
              <Formik 
               initialValues={{email:'',user:'',phonenumber:'',password:'',confirmpassword:''}}
               validationSchema={ReviewSchem}
               onSubmit={(values,action)=>{
                   action.resetForm()
                Submit(values)
               }}
               >
                   {(props)=>(
                       <View>
            <View style={[styles.inputContainer]}>
                <View style={styles.inputSubContainer}>
                    <FontAwesome name="user" size={22}
                   style={{marginRight:10}} />
                    
                    
                    <TextInput placeholder="Enter your name"
                    selectionColor='gainsboro'
                    onChangeText={props.handleChange('user')}
                    value={props.values.email}
                    onBlur={props.handleBlur('user')}
                    style={styles.inputText}
                    />
                </View>
             
            </View>
            <Text style={styles.errortext}>{props.touched.user && props.errors.user}</Text>
            <View style={[styles.inputContainer]}>
                <View style={styles.inputSubContainer}>
                    <Icon name="email" size={22}
                    color='black'
                    style={{marginRight:10}}/>
                    
                    <TextInput placeholder="Enter your email"
                    selectionColor='gainsboro'
                    onChangeText={props.handleChange('email')}
                    value={props.values.email}
                    onBlur={props.handleBlur('email')}
                    style={styles.inputText}
                    />
                </View>
             
            </View>
            <Text style={styles.errortext}>{props.touched.email && props.errors.email}</Text>
            <View style={[styles.inputContainer]}>
                <View style={styles.inputSubContainer}>
                    <Icon name="phone" size={22}
                    color='black'
                    style={{marginRight:10}}/>
                    
                    <TextInput placeholder="Phone Number"
                    selectionColor='gainsboro'
                    keyboardType="numeric"
                    onChangeText={props.handleChange('phonenumber')}
                    value={props.values.phonenumber}
                    onBlur={props.handleBlur('phonenumber')}
                    style={styles.inputText}
                    />
                </View>
             
            </View>
            <Text style={styles.errortext}>{props.touched.phonenumber && props.errors.phonenumber}</Text>
            <View style={styles.inputContainer}>
                <View style={styles.inputSubContainer}>
                <Icon name="lock" size={22}
                    color='black'
                    style={{marginRight:10}}/>
                 <TextInput
                 secureTextEntry={isPasswordShow? false :true}
                 placeholder="Enter your Password"
                 selectionColor='gainsboro'
                 onChangeText={props.handleChange('password')}
                value={props.values.password}
                 onBlur={props.handleBlur('password')}
                 style={styles.inputText}/>
                 <Feather
                 name="eye-off" size={22}
                 color='black'
                 style={{marginRight:10}}
                 onPress={()=>setPasswordShow(!isPasswordShow)}
                 />
                </View>

            </View>
            <Text style={styles.errortext}>{props.touched.password && props.errors.password}</Text>
            <View style={styles.inputContainer}>
                <View style={styles.inputSubContainer}>
                <Icon name="lock" size={22}
                    color='black'
                    style={{marginRight:10}}/>
                 <TextInput
                 secureTextEntry={isPasswordShow? false :true}
                 placeholder="Confirm your Password"
                 selectionColor='gainsboro'
                 onChangeText={props.handleChange('confirmpassword')}
                value={props.values.confirmpassword}
                 onBlur={props.handleBlur('confirmpassword')}
                 style={styles.inputText}/>
                 <Feather
                 name="eye-off" size={22}
                 color='black'
                 style={{marginRight:10}}
                 onPress={()=>setPasswordShow(!isPasswordShow)}
                 />
                </View>

            </View>
            <Text style={styles.errortext}>{props.touched.confirmpassword && props.errors.confirmpassword}</Text>
            <Text></Text>
            <TouchableOpacity style={styles.signinButton}
            onPress={()=>navigation.navigate('AccountDetails')}>
                <Text style={styles.signinButtonText}>UPDATE</Text>
            </TouchableOpacity>
            
            </View>)}
            </Formik> 
        </SafeAreaView>
    )
}

export default AccountDetails

const styles = StyleSheet.create({
    headerContainer:{
        flexDirection:'row' ,
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:40,
        paddingHorizontal:20
     },
     headerTitle:{
       fontSize:20,
       lineHeight:20 * 1.4,
       width:Display.setWidth(80),
       textAlign:'center'  
 
     },
     inputContainer:{
        backgroundColor:'#F5F5F5',
        paddingHorizontal:10,
        marginHorizontal:20,
        borderRadius:8,
        justifyContent:'center',
        borderBottomWidth:2,
        borderBottomColor:'black', 
       marginBottom:-10
    },
    inputSubContainer:{
        flexDirection:'row',
        alignItems:'center',
        
    },
    inputText:{
        fontSize:18,
        textAlignVertical:'center',
        padding:0,
        height:Display.setHeight(6),
        color:'black',
        flex:1

    },
    
    
    signinButton:{
        backgroundColor:'#0225A1',
        borderRadius:8,
        marginHorizontal:30,
        height:Display.setHeight(6),
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
       
      paddingVertical:30,
      paddingHorizontal:60,
     
      
      elevation:2,
     
    },
    signinButtonText:{
        fontSize:18,
        lineHeight:18 * 1.4,
        color:'#fff',
        
    },
    errortext:{
        color:'red',
        paddingHorizontal:20,
        marginHorizontal:20,
        justifyContent:'center',
        padding:10,
    },
})
