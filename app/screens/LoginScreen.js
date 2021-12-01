/** @format */

import React, { useState } from "react";
import { Image, Platform, StyleSheet, Text, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import AppScreen from "../components/AppScreen";
import ErrorMessage from "../components/ErrorMessage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  return (
    <AppScreen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/logo-red.png")}
      />

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {}}
      >
        {({ handleChange, handleSubmit, setFieldTouched, touched, errors }) => {
          return (
            <>
              <AppTextInput
                icon='email'
                placeholder='Email'
                autoCapitalize='none'
                autoCorrect={false}
                onBlur={() => setFieldTouched("email")}
                keyboardType='email-address'
                onChangeText={handleChange("email")}
              />
              {touched.email && <ErrorMessage error={errors.email} />}
              <AppTextInput
                icon='lock'
                placeholder='Password'
                autoCapitalize='none'
                autoCorrect={false}
                onBlur={() => setFieldTouched("email")}
                secureTextEntry={true}
                onChangeText={handleChange("password")}
              />
              {touched.password && <ErrorMessage error={errors.password} />}

              <AppButton title='Login' onPress={handleSubmit} />
            </>
          );
        }}
      </Formik>
    </AppScreen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
