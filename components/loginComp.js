import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    ImageBackground,
    TouchableOpacity,
    Alert,
    ScrollView,
  } from "react-native";
  import React, { useState } from "react";
  import AppLoading from "expo-app-loading";
  import {useNavigation} from '@react-navigation/native';
  import Checkbox from "expo-checkbox";
  import * as LocalAuthentication from 'expo-local-authentication';
  import Icon from 'react-native-vector-icons/FontAwesome';
  import MaterialIcon from 'react-native-vector-icons/MaterialIcons';


  // import {
  //   useFonts,
  //   JosefinSans_400Regular,
  //   JosefinSans_400Light,
  //   JosefinSans_500Medium,
  // } from "@expo-google-fonts/josefin-sans";
  // // import { Nunito_600SemiBold, Nunito_700Bold } from "@expo-google-fonts/nunito";
  import {
    useFonts,
    PlayfairDisplay_400Regular,
    PlayfairDisplay_500Medium,
    PlayfairDisplay_600SemiBold,
    PlayfairDisplay_700Bold,
    PlayfairDisplay_800ExtraBold,
    PlayfairDisplay_900Black,
    PlayfairDisplay_400Regular_Italic,
  } from "@expo-google-fonts/playfair-display";
  
  const Login = () => {
    const navigation = useNavigation();
    const [userName, setUserName] = useState("");
    const [Password, setpassword] = useState("");
    const [agree, setAgree] = useState(false);
  
    const submit = () => {
      if (!userName && !Password) {
        Alert.alert("Fill the details correctly");
      } else {
        Alert.alert(`Welcome to TMS ${userName}`);
      }
    };

    const handleLogin = () => {
      navigation.navigate('LandingPage');
    };

    const biometricLogin = async () => {
      let compatible = await LocalAuthentication.hasHardwareAsync();
      if (!compatible) {
        Alert.alert('Biometric authentication not available on this device');
        return;
      }
    
      let result = await LocalAuthentication.authenticateAsync();
      if (result.success) {
        Alert.alert('Sucessfully entered pin');
        navigation.navigate('LandingPage');
      } else {
        Alert.alert('Wrong Pin, check ID or Password');
      }
    };
    

    return (
      <View style={styles.mainContainer}>
        
        <View style={styles.backdrop}>
        <Image
            style={styles.backdropImg}
            source={require("../assets/image001.png")}
          />
        </View>
  
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageStyle}
            source={require("../assets/loadinng.gif")}
          />
        </View>
        <Text style={styles.mainHeader1}>Transportation Management System</Text>
        <Text style={styles.mainHeader}>Hi! Welcome!</Text>
        <Text style={styles.description}>Enter Login details below:</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.labels}> Enter your Z-Id :</Text>
          <TextInput
            style={styles.inputStyle}
            autoCapitalize="none"
            autoCorrect="none"
            placeholder="Z-ID"
            placeholderTextColor="white" 
            value={userName}
            onChangeText={(actualData) => setUserName(actualData)}
          />
        </View>
  
        <View style={styles.inputContainer}>
          <Text style={styles.labels}> Enter your Password :</Text>
          <TextInput
            style={styles.inputStyle}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor="white" 
            value={Password}
            onChangeText={(actualData) => setpassword(actualData)}
          />
        </View>
      
        <View style={styles.hintView}>
          <Text style={styles.hintText}>Hint: Login with Arca password</Text>
        </View>


      
        <TouchableOpacity style={[styles.buttonStyle, { width: "70%",backgroundColor: "#FC6D26", alignSelf: "center",flexDirection: "row", alignItems: "center" }]}
        onPress={() => handleLogin()}>

          <Text style={styles.buttonText}>Login  </Text>
          <Icon name="sign-in" size={25} color="white" />
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
        <View style={{ flex: 1, height: 1, backgroundColor: '#FC6D26' }} />
        <Text style={{ marginHorizontal: 10,color:"#FC6D26" }}>OR</Text>
        <View style={{ flex: 1, height: 1, backgroundColor: '#FC6D26' }} />
        </View>

        <TouchableOpacity style={[styles.buttonStyleBio, { width: "60%",backgroundColor: "#FC6D26", alignSelf: "center",flexDirection: "row", alignItems: "center" }]}
        onPress={() => biometricLogin()}>
        
        <Text style={styles.buttonTextBio}>Use Pin  </Text>
        <Icon name="th" size={20} color="white" />
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    mainContainer: {
      height: "100%",
      paddingHorizontal: 30,
      backgroundColor: "#fff",
    },
    mainHeader1: {
      fontSize: 30,
      color: "white",           /*black*/
      fontWeight: "700",
      paddingTop: 40,
      paddingBottom: 15,
      fontFamily: "PlayfairDisplay_400Regular_Italic",
      textAlign: "center",
      
    },
    mainHeader: {
      fontSize: 30,
      color: "#FC6D26",
      fontWeight: "500",
      paddingTop: 10,
      paddingBottom: 15,
      fontFamily: "PlayfairDisplay_400Regular_Italic",
      textTransform: "capitalize",
      textAlign: "center",
    },
    description: {
      fontSize: 20,
      color: "#b5b8c7",
      paddingBottom: 5,
      fontFamily: "PlayfairDisplay_400Regular_Italic",
      lineHeight: 25,
    },
  
    inputContainer: {
      marginTop: 10,
    },
    labels: {
      fontWeight: "bold",
      fontSize: 15,
      color: "#E24329",
      paddingBottom: 5,
      fontFamily: "PlayfairDisplay_400Regular_Italic",
      lineHeight: 25,
    },
    inputStyle: {
      borderWidth: 1,
      borderColor: "white", /*rgba(0, 0, 0, 0.3) */
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 5,
    },
    multiineStyle: {
      paddingVertical: 4,
    },
    imageStyle: {
      width: 200,
      height: 100,
      justifyContent: "center",
      alignItems: "center",
      // paddingLeft: "100",
    },
    buttonStyle: {
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 18,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 20,
      
    },
    
    buttonStyleBio: {
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 18,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 20,

      
    },

    buttonTextBio:{
      color: "#fff",
      fontSize: 19,
      fontWeight: "600",
      letterSpacing: 1,

    },
    buttonText: {
      color: "#fff",
      fontSize: 19,
      fontWeight: "600",
      letterSpacing: 1.3,
      
    },
    wrapper: {
      display: "flex",
      flexDirection: "row",
      marginTop: 20,
      fontFamily: "PlayfairDisplay_400Regular_Italic",
    },
    wrapperText: {
      marginLeft: 10,
      color: "#7d7d7d",
      fontFamily: "PlayfairDisplay_400Regular_Italic",
    },
    hintView: {
      backgroundColor:"#EAEAEA",
      padding: 10,
      borderRadius: 5,
      marginTop: 10,
      width:"70%",
    },
    hintText: {
      fontSize: 12,
      fontWeight: 'bold',
      color: '#E24329',
      
    },

    imageContainer: {
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 60,
      paddingBottom: 0,
    },
    
    backdrop: {
      zIndex: -1,
    },
    backdropImg: {
      flex: 1,
      resizeMode: 'cover',
      position: 'absolute',
      opacity: 1,
      top: -30,
      left: -30,
      // height: 100,
      // margin: 0,
      height: 900,
      width: 800,
    },
  });
  
  export default Login;