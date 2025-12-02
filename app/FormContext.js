import { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormContextProvider = ({children}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    billingType: "", //monthly or yearly
    planType: "", //arcade, advanced, or pro
    addOns: {
      onlineService: false,
      largerStorage: false,
      customizableProfile: false
    }
  });

  const updateFormData = (newData) => {
    setFormData((prevData) => ({...prevData, ...newData}));
  }

  return (
    <FormContext value={{formData, updateFormData}}>
      {children}
    </FormContext>
  );
};