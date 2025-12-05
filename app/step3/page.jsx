"use client";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FormContext } from "../FormContext";
import { FormGroup, FormControlLabel, Checkbox, Button } from "@mui/material";

const Step3 = () => {
  const router = useRouter();
  const { updateFormData } = useContext(FormContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    updateFormData(data);
    router.push("/step4");
  };

  return (
    <>
      <div>
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <FormControlLabel
            {...register("onlineService")}
            control={<Checkbox />}
            label="Online service"
          />
          <FormControlLabel
            {...register("largerStorage")}
            control={<Checkbox />}
            label="Larger storage"
          />
          <FormControlLabel
            {...register("customizableProfile")}
            control={<Checkbox />}
            label="Customizable profile"
          />
        </FormGroup>
        <div>
          <Button onClick={() => router.back()}>Go Back</Button>
          <Button variant="contained" type="submit">
            Next Step
          </Button>
        </div>
      </form>
    </>
  );
};

export default Step3;
