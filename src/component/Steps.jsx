import React from "react";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TokenAddress from "./TokenAddress";
const Steps = ({steps}) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };


  return (
    <div className=" w-full ">
   <Box  className=" w-full hidden lg:block">
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
     
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={index} {...stepProps}>
              <StepLabel {...labelProps}>
           <h6 className=" text-sr">   {label.h1}</h6>
              <p className=" text-sr text-s w-32 text-xs">{label.p}</p>
              </StepLabel>
             
            </Step>
          );
        })}
      </Stepper>
  
    </Box>
    <div className=" w-full pt-4">
    <TokenAddress handleNext={handleNext}/>
    </div>
    </div>
  );
};

export default Steps;
