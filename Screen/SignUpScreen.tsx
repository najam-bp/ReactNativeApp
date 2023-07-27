import { View, Text, Button, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Formik } from 'formik'
import * as Yup from 'yup'


const SignupSchema = Yup.object().shape({
    Email: Yup.string()
        .min(6, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Please enter your email address'),
    Password: Yup.string()
        .min(8)
        .required('Please enter your password')
        .matches(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
            'Must contain minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character'
        ),
    ConfirmPassword: Yup.string()
        .min(8)
        .required('confirm password')
        .matches(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
            'Must contain minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character'
        ),
});



const SignUpScreen = ({ navigation }: any) => {

    const SaveData = (values: any) => {

        console.log('========', values)
        navigation.navigate("Home")
    }

    // function alert(arg0: string): void {
    //     throw new Error('Function not implemented.')
    // }

    // function SaveData(): void {
    //     throw new Error('Function not implemented.')
    // }

    return (
        <Formik initialValues={{
            Email: '',
            Password: '',
            ConfirmPassword: ''
        }}

            validationSchema={SignupSchema}
            onSubmit={SaveData}
        >
            {({ values, errors, touched, handleSubmit, setFieldTouched, setFieldValue, resetForm }: any) => (

                <View style={style.loginContainer}>
                    <Text style={style.RNheading}>Create an account</Text>
                    <TextInput style={style.loginInput}
                        placeholder='Enter Email'
                        placeholderTextColor='black'
                        value={values.Email}
                        onBlur={() => setFieldTouched('Email')}
                        onChangeText={(val) => setFieldValue('Email', val)}

                    />
                    {touched.Email && errors.Email ? <Text style={style.ErrorText}>{errors.Email}</Text> : null}
                    <TextInput style={style.loginInput}
                        placeholder='Enter Password'
                        placeholderTextColor='black'
                        value={values.Password}
                        onBlur={() => setFieldTouched('Password')}
                        onChangeText={(val) => setFieldValue('Password', val)}
                        secureTextEntry={true}
                    />
                    {touched.Password && errors.Password ? <Text style={style.ErrorText}>{errors.Password}</Text> : null}

                    <TextInput style={style.loginInput}
                        placeholder='Confirm Password'
                        placeholderTextColor='black'
                        value={values.ConfirmPassword}
                        onBlur={() => setFieldTouched('ConfirmPassword')}
                        onChangeText={(val) => setFieldValue('ConfirmPassword', val)}
                        secureTextEntry={true}
                    />
                    {touched.ConfirmPassword && errors.ConfirmPassword ? <Text style={style.ErrorText}>{errors.ConfirmPassword}</Text> : null}

                    <View style={style.loginBtn}>
                        <Button title='Sign Up' onPress={() => {
                            handleSubmit()
                            resetForm()
                        }} />

                    </View>

                    <View style={style.privateText}>
                        <Text style={{ color: 'black' }}>By registering, you confirm that you accept our</Text>
                        <TouchableOpacity onPress={() => alert('term Clicked!')}>
                            <Text style={{ color: 'goldenrod', marginLeft: 4 }}>Terms of Service</Text>
                        </TouchableOpacity>
                        <Text style={{ color: 'goldenrod', margin: 5 }}>and</Text>
                        <Text style={{ color: 'black' }}>Privacy Policy</Text>
                    </View>

                    {/* Social Link */}

                    <TouchableOpacity style={style.socailFacBtn} onPress={() => { }} >
                        <FontAwesome name="facebook" color='blue' size={24} />
                        <Text style={{ paddingHorizontal: 20, color: 'blue', fontWeight: 'bold' }}>Sign In With Facebook</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.socailGooBtn} onPress={() => { }}>
                        <FontAwesome name="google" color='red' size={24} />
                        <Text style={{ paddingHorizontal: 20, color: 'red', fontWeight: 'bold' }}>Sign In With Google</Text>
                    </TouchableOpacity>

                    {/* Social Link */}


                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={style.creatNewAccnt}>Have an account? Login</Text>
                    </TouchableOpacity>
                </View>
            )}
        </Formik>
    )
}

const style = StyleSheet.create({
    loginContainer: {
        flex: 1,
        backgroundColor: '	#f4f0f0',
        marginTop: '15%'

    },
    loginInput: {
        borderWidth: 1,
        borderColor: '#A9A9A9',
        margin: 10,
        width: 300,
        borderRadius: 5,
        marginLeft: 30,
        color: 'black'
    },
    loginBtn: {
        margin: 30,
        marginTop: 15,
        borderRadius: 10
    },
    RNheading: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: '800',
        fontStyle: 'italic',
        color: '#000066',
        margin: 25
    },
    creatNewAccnt: {
        textAlign: 'center',
        fontSize: 15,
        color: '#3399FF',
        fontWeight: 'bold',
        margin: 20
    },
    socailFacBtn: {
        backgroundColor: '#d2d1ff',
        margin: 16,
        width: 300,
        padding: 10,
        borderRadius: 5,
        marginLeft: 30,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center"
    },
    socailGooBtn: {
        borderColor: '#ffcecc',
        backgroundColor: '#ffa5a7',
        textAlign: 'center',
        width: 300,
        padding: 10,
        borderRadius: 5,
        marginLeft: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    privateText: {
        fontSize: 14,
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    ErrorText: {
        color: 'red',
        fontSize: 10,
        marginLeft: 30,
        margin: 'auto'
    }


})

export default SignUpScreen