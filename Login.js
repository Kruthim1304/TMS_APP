// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   TextInput,
//   ImageBackground,
//   TouchableOpacity,
//   Alert,
//   ScrollView,
// } from "react-native";
// import React, { useState } from "react";
// import AppLoading from "expo-app-loading";

// import Checkbox from "expo-checkbox";
// // import {
// //   useFonts,
// //   JosefinSans_400Regular,
// //   JosefinSans_400Light,
// //   JosefinSans_500Medium,
// // } from "@expo-google-fonts/josefin-sans";
// // // import { Nunito_600SemiBold, Nunito_700Bold } from "@expo-google-fonts/nunito";
// import {
//   useFonts,
//   PlayfairDisplay_400Regular,
//   PlayfairDisplay_500Medium,
//   PlayfairDisplay_600SemiBold,
//   PlayfairDisplay_700Bold,
//   PlayfairDisplay_800ExtraBold,
//   PlayfairDisplay_900Black,
//   PlayfairDisplay_400Regular_Italic,
// } from "@expo-google-fonts/playfair-display";

// const Login = () => {
//   const [userName, setUserName] = useState("");
//   const [Password, setpassword] = useState("");
//   const [agree, setAgree] = useState(false);

//   const submit = () => {
//     if (!userName && !Password) {
//       Alert.alert("Fill the details correctly");
//     } else {
//       Alert.alert(`Welcome to TMS ${userName}`);
//     }
//   };
//   return (
//     <View style={styles.mainContainer}>
      
//       <View style={styles.backdrop}>
//       <Image
//           style={styles.backdropImg}
//           source={require("./assets/bg2.png")}
//         />
//       </View>

//       <View style={styles.imageContainer}>
//         <Image
//           style={styles.imageStyle}
//           source={require("./assets/logo.png")}
//         />
//       </View>
//       <Text style={styles.mainHeader1}>Transportation Management System</Text>
//       <Text style={styles.mainHeader}>Hi! Welcome!</Text>
//       <Text style={styles.description}>Enter Login details below:</Text>
//       <View style={styles.inputContainer}>
//         <Text style={styles.labels}> Enter your Z-Id :</Text>
//         <TextInput
//           style={styles.inputStyle}
//           autoCapitalize="none"
//           autoCorrect="none"
//           placeholder="Z-ID"
//           value={userName}
//           onChangeText={(actualData) => setUserName(actualData)}
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <Text style={styles.labels}> Enter your Password :</Text>
//         <TextInput
//           style={styles.inputStyle}
//           autoCapitalize="none"
//           autoCorrect={false}
//           secureTextEntry={true}
//           placeholder="Password"
//           value={Password}
//           onChangeText={(actualData) => setpassword(actualData)}
//         />
//       </View>

//       <View style={styles.wrapper}>
//         <Checkbox
//           value={agree}
//           onValueChange={() => setAgree(!agree)}
//           color={agree ? "#FC6D26" : undefined}
//         />
//         <Text style={styles.wrapperText}>Keep me logged in</Text>
//       </View>
//       <TouchableOpacity
//         style={[styles.buttonStyle, { backgroundColor: "#FC6D26" }]}
//         onPress={() => submit()}
//       >
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   mainContainer: {
//     height: "100%",
//     paddingHorizontal: 30,
//     backgroundColor: "#fff",
//   },
//   mainHeader1: {
//     fontSize: 30,
//     color: "black",
//     fontWeight: "700",
//     paddingTop: 40,
//     paddingBottom: 15,
//     fontFamily: "PlayfairDisplay_400Regular_Italic",
//     textAlign: "center",
    
//   },
//   mainHeader: {
//     fontSize: 30,
//     color: "#FC6D26",
//     fontWeight: "500",
//     paddingTop: 10,
//     paddingBottom: 15,
//     fontFamily: "PlayfairDisplay_400Regular_Italic",
//     textTransform: "capitalize",
//     textAlign: "center",
//   },
//   description: {
//     fontSize: 20,
//     color: "#7d7d7d",
//     paddingBottom: 5,
//     fontFamily: "PlayfairDisplay_400Regular_Italic",
//     lineHeight: 25,
//   },

//   inputContainer: {
//     marginTop: 10,
//   },
//   labels: {
//     fontWeight: "bold",
//     fontSize: 15,
//     color: "#E24329",
//     paddingBottom: 5,
//     fontFamily: "PlayfairDisplay_400Regular_Italic",
//     lineHeight: 25,
//   },
//   inputStyle: {
//     borderWidth: 1,
//     borderColor: "rgba(0, 0, 0, 0.3)",
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     borderRadius: 5,
//   },
//   multiineStyle: {
//     paddingVertical: 4,
//   },
//   imageStyle: {
//     width: 200,
//     height: 100,
//     justifyContent: "center",
//     alignItems: "center",
//     // paddingLeft: "100",
//   },
//   buttonStyle: {
//     borderRadius: 5,
//     paddingVertical: 10,
//     paddingHorizontal: 18,
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     marginVertical: 30,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 19,
//     fontWeight: "600",
//     letterSpacing: 1.3,
    
//   },
//   wrapper: {
//     display: "flex",
//     flexDirection: "row",
//     marginTop: 20,
//     fontFamily: "PlayfairDisplay_400Regular_Italic",
//   },
//   wrapperText: {
//     marginLeft: 10,
//     color: "#7d7d7d",
//     fontFamily: "PlayfairDisplay_400Regular_Italic",
//   },
//   imageContainer: {
//     justifyContent: "center",
//     alignItems: "center",
//     paddingTop: 60,
//     paddingBottom: 0,
//   },
  
//   backdrop: {
//     zIndex: -1,
//   },
//   backdropImg: {
//     flex: 1,
//     resizeMode: 'cover',
//     position: 'absolute',
//     opacity: 0.25,
//     top: -30,
//     left: -30,
//     // height: 100,
//     // margin: 0,
//     height: 900,
//     width: 800,
//   },
// });

// export default Login;