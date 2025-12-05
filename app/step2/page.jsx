"use client";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { FormContext } from "../FormContext";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  ToggleButtonGroup,
  ToggleButton,
  Button,
} from "@mui/material";

const Step2 = () => {
  const router = useRouter();
  const { updateFormData, setYearlyBilling } = useContext(FormContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    updateFormData(data);
    router.push("/step3");
  };

  const handleBilling = (event, newBilling) => {
    setYearlyBilling(newBilling);
  };

  return (
    <>
      <div>
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RadioGroup row>
          <FormControlLabel
            value="arcade"
            control={<Radio {...register("planType")} />}
            label="Arcade"
          />
          <FormControlLabel
            value="advanced"
            control={<Radio {...register("planType")} />}
            label="Advanced"
          />
          <FormControlLabel
            value="pro"
            control={<Radio {...register("planType")} />}
            label="Pro"
          />
        </RadioGroup>

        <ToggleButtonGroup onChange={handleBilling} exclusive>
          <ToggleButton value={false}>Monthly</ToggleButton>
          <ToggleButton value={true}>Yearly</ToggleButton>
        </ToggleButtonGroup>

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

export default Step2;
