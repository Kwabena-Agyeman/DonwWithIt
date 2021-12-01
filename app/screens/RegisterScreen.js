/** @format */

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AppScreen from "../components/AppScreen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import ErrorMessage from "../components/ErrorMessage";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().max(10).min(4).label("Name"),
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const RegisterScreen = () => {
  return (
    <AppScreen style={styles.container}>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {}}
      >
        {({ handleChange, handleSubmit, touched, errors, setFieldTouched }) => {
          return (
            <>
              <AppTextInput
                icon='account'
                placeholder='Name'
                autoCapitalize='none'
                autoCorrect={false}
                onBlur={() => setFieldTouched("name")}
                onChangeText={handleChange("name")}
              />
              {touched.email && <ErrorMessage error={errors.name} />}

              <AppTextInput
                icon='email'
                placeholder='Email'
                autoCapitalize='none'
                autoCorrect={false}
                onBlur={() => setFieldTouched("email")}
                onChangeText={handleChange("email")}
              />
              {touched.email && <ErrorMessage error={errors.email} />}

              <AppTextInput
                icon='lock'
                placeholder='Password'
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry
                onBlur={() => setFieldTouched("password")}
                onChangeText={handleChange("password")}
              />
              {touched.email && <ErrorMessage error={errors.password} />}

              <AppButton title='Register' onPress={handleSubmit} />
            </>
          );
        }}
      </Formik>
    </AppScreen>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
