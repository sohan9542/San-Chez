import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CreateToken from "./CreateToken";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  bgcolor: "#172A4B",

  boxShadow: 24,
 
};

const TokenAddress = ({ handleNext }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className=" w-full p-4 rounded-md" style={{ background: "#172A4B" }}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className=" lg:w-2/5 w-80">
         <CreateToken/>
        </Box>
      </Modal>

      <p className=" text-xs text-tr">(*) is required field.</p>
      <div className=" flex flex-wrap justify-between w-full">
        <h6 className=" text-white text-sm py-2">
          Token address <span className=" text-tr">*</span>{" "}
        </h6>
        <div>
          <button
            onClick={handleOpen}
            className=" px-3 py-1 bg-pr text-sr hover:text-white font-light text-sm rounded-sm"
          >
            Create Token
          </button>
        </div>
      </div>
      <div className=" py-3">
        <input
          type="text"
          placeholder="Ex: Pinkmoon"
          className=" w-full bg-transparent py-1 px-2"
        />
        <p className=" text-xs text-tr pt-1">Create pool fee: 1 BNB</p>
        <div className=" pt-3">
          <FormControl>
            <FormLabel
              id="demo-radio-buttons-group-label"
              className=" text-white"
            >
              Currency
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="BNB"
              />
              <FormControlLabel value="male" control={<Radio />} label="BUSD" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="USDT"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <p className=" text-xs text-tr pt-1">
          Users will pay with BNB for your token
        </p>
        <div className=" flex items-center justify-center w-full pt-3">
          <button
            onClick={handleNext}
            className=" px-3 py-1 bg-pr text-sr hover:text-white font-light text-sm rounded-sm"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TokenAddress;
