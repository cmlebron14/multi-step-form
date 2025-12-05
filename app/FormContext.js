"use client";
import { createContext, useState } from "react";

export const FormContext = createContext();

export const FormContextProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    planType: "", //arcade, advanced, or pro
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  });

  const [yearlyBilling, setYearlyBilling] = useState(true);

  const updateFormData = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  return (
    <FormContext
      value={{ formData, updateFormData, yearlyBilling, setYearlyBilling }}
    >
      {children}
    </FormContext>
  );
};
