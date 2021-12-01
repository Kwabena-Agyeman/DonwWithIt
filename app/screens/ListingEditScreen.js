/** @format */

import React from "react";
import AppScreen from "../components/AppScreen";
import { Formik, FieldArray } from "formik";
import * as Yup from "yup";

import { StyleSheet, Text, View } from "react-native";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import ErrorMessage from "../components/ErrorMessage";
import AppPicker from "../components/AppPicker";
import colors from "../utils/colors";
import ImageInput from "../components/ImageInput";
import ImageInputList from "../components/ImageInputList";

const validationSchema = Yup.object().shape({
  title: Yup.string().min(5).required().label("Title"),
  price: Yup.number().min(1).max(10000).required().label("Price"),
  category: Yup.string().required().label("Category"),
  description: Yup.string().required().label("Description"),
});

const items = [
  {
    label: "Furniture",
    value: 1,
    icon: "sofa",
    color: "yellow",
  },
  {
    label: "Clothing",
    value: 2,
    icon: "hanger",
    color: "red",
  },
  {
    label: "Cameras",
    value: 3,
    icon: "camera",
    color: "blue",
  },
  {
    label: "Phones",
    value: 4,
    icon: "cellphone-iphone",
    color: "gold",
  },
  {
    label: "Homes",
    value: 5,
    icon: "home-lightbulb",
    color: "tomato",
  },
  {
    label: "Gaming",
    value: 6,
    icon: "gamepad-variant-outline",
    color: "purple",
  },
  {
    label: "Car",
    value: 7,
    icon: "car",
    color: "pink",
  },
  {
    label: "Toys",
    value: 8,
    icon: "toy-brick",
    color: "blue",
  },
  {
    label: "Sports",
    value: 9,
    icon: "bowling",
    color: "salmon",
  },
];

const ListingEditScreen = () => {
  return (
    <AppScreen style={styles.container}>
      <Formik
        initialValues={{
          title: "",
          price: "",
          category: "",
          description: "",
          images: [],
        }}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm({
            values: {
              title: "",
              price: "",
              category: "",
              description: "",
            },
          });
        }}
        validationSchema={validationSchema}
      >
        {({
          handleChange,
          handleSubmit,
          errors,
          touched,
          setFieldTouched,
          setFieldValue,
          values,
        }) => {
          return (
            <>
              <FieldArray name='images'>
                {({ insert, remove, push, form }) => {
                  return (
                    <ImageInputList
                      imageUris={form.values.images}
                      onAddImage={(image) => {
                        push(image);
                      }}
                      onRemoveImage={(image) => {
                        remove(image);
                      }}
                    />

                    // <ImageInput
                    //   setImages={(image) => {
                    //     push(image);
                    //   }}
                    // />
                  );
                }}
              </FieldArray>

              <AppTextInput
                placeholder='Title'
                autoCapitalize='none'
                autoCorrect={false}
                onBlur={() => setFieldTouched("title")}
                keyboardType='default'
                onChangeText={handleChange("title")}
              />
              {touched.title && <ErrorMessage error={errors.title} />}

              <AppTextInput
                placeholder='Price'
                autoCapitalize='none'
                autoCorrect={false}
                onBlur={() => setFieldTouched("price")}
                keyboardType='numeric'
                onChangeText={handleChange("price")}
                style={{
                  width: "25%",
                }}
              />
              {touched.price && <ErrorMessage error={errors.price} />}

              <AppPicker
                placeholder='Catergory'
                items={items}
                style={{
                  width: "50%",
                }}
                selectedItem={values.category}
                onSelectItem={(item) => {
                  setFieldValue("category", item.label, true);
                }}
              />
              {touched.category && <ErrorMessage error={errors.category} />}

              <AppTextInput
                placeholder='Description'
                autoCapitalize='none'
                autoCorrect={false}
                onBlur={() => setFieldTouched("description")}
                keyboardType='default'
                onChangeText={handleChange("description")}
              />
              {touched.description && <ErrorMessage error={errors.description} />}

              <AppButton title='post' onPress={handleSubmit} />
            </>
          );
        }}
      </Formik>
    </AppScreen>
  );
};

export default ListingEditScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
