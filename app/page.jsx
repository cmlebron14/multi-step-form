"use client";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FormContext } from "./FormContext";
import { TextField, Button } from "@mui/material";
import styles from "./page.module.css";

const Step1 = () => {
  const router = useRouter();
  const { updateFormData } = useContext(FormContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    updateFormData(data);
    router.push("/step2");
  };

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.heading}>Personal info</h1>
        <p className={styles.subheading}>
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.inputWrapper}>
          <TextField {...register("name")} label="Name" />
        </div>
        <div className={styles.inputWrapper}>
          <TextField {...register("email")} label="Email Address" />
        </div>
        <div className={styles.inputWrapper}>
          <TextField {...register("phone")} label="Phone Number" />
        </div>
        <div className={styles.buttonWrapper}>
          <Button variant="contained" type="submit">
            Next Step
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Step1;
