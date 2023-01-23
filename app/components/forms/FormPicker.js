import React from "react";
import { useFormikContext } from "formik";

import Picker from "../Picker";
import ErrorMessage from "./ErrorMessage";

function AppFormPicker({
  icon,
  items,
  name,
  numberOfColumns,
  PickerItemComponent,
  placeholder,
  width,
  visible
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    visible === false ? null : (
      <>
        <Picker
          items={items}
          numberOfColumns={numberOfColumns}
          onSelectItem={(item) => setFieldValue(name, item)}
          PickerItemComponent={PickerItemComponent}
          placeholder={placeholder}
          selectedItem={values[name]}
          width={width}
          icon={icon}
        />
        <ErrorMessage error={errors[name]} visible={touched[name]} />
      </>
    )
  );
}

export default AppFormPicker;
