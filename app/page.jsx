"use client";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FormContext } from "./FormContext";
import { TextField, Button } from "@mui/material";

const Step1 = () => {
  const router = useRouter();
  const { updateFormData } = useContext(FormContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    updateFormData(data);
    router.push("/step2");
  };

  return (
    <>
      <div>
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextField {...register("name")} label="Name" />
        </div>
        <div>
          <TextField {...register("email")} label="Email Address" />
        </div>
        <div>
          <TextField {...register("phone")} label="Phone Number" />
        </div>
        <div>
          <Button variant="contained" type="submit">
            Next Step
          </Button>
        </div>
      </form>
    </>
  );
};

export default Step1;
