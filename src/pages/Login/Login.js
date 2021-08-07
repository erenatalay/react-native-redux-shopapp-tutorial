import React from 'react'
import { Alert, Image, SafeAreaView, Text, View } from 'react-native'
import Button from '../../components/Button';
import Input from '../../components/input/Input';
import styles from "./Login.style";
import { Formik } from "formik"
import usePost from "../../hooks/usePost"
import { API_AUTH_URL } from "@env";

const Login = ({navigation}) => {
    const {data,loading,error,post} = usePost();
    const handleLogin = (values) => {
       post(API_AUTH_URL,values)
    }
    
 
    if (data) {
        if (data.status === "Error") {
        Alert.alert("Dükkan","Kullanıcı Bulunamadı")
            
        }else{
            navigation.navigate("ProductsPage")
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
                <Image style={styles.logo} source={require("../../assets/login_logo.png")} />
            </View>
            <Formik
            initialValues={{username : "", password : ""}}
            onSubmit={handleLogin}
            >

                {({handleSubmit,handleChange,values}) =>
                (
                    <View style={styles.body_container}>

                        <Input 
                        placeholder="Kullanıcı adını giriniz..." 
                         value={values.username}
                         onType={handleChange("username")}
                         iconName="account"
                         
                         />
                        <Input
                         placeholder="Şifrenizi giriniz" 
                         value={values.password} 
                          onType={handleChange("password")}
                         iconName="key"
                          isSecure
                          />
                        <Button text={"Giriş Yap"} onPress={handleSubmit} loading={loading}/>
                    </View>

                )}

            </Formik>

        </SafeAreaView>

    )
}

export default Login
