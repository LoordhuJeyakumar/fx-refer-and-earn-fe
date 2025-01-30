import { PropTypes } from 'prop-types';
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Alert,
  Backdrop,
  Box,
  Button,
  Fade,
  Modal,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import {
  ClearAllRounded,
  CloseRounded,
  SendRounded,
} from "@mui/icons-material";
import axios from "axios";
import LogoComponent from "./LogoComponent";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
const API_BASE_URL = "http://localhost:3000";
function PopupModalForm({ open, setOpen }) {
  const handleClose = () => setOpen(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [errorSnackbarOpen, setErrorSnackbarOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    // Handle form submission logic
    try {
      const response = await axios.post(
        `${API_BASE_URL}/referral/create`,
        data
      );
      console.log(response);
      console.log(response.data);
      reset();
      handleClose();
      // Handle successful submission
      setSnackbarOpen(true);
    } catch (error) {
      console.error(error);
      // Handle error
      setErrorMessage(
        error.message || "Failed to submit referral. Please try again."
      );
      setErrorSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };
  const handleErrorSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setErrorSnackbarOpen(false);
  };

  return (
    <div>
      <Modal
        keepMounted
        disableEscapeKeyDown
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Box className="grid grid-cols-2 gap-4 p-0 m-0">
              <Typography
                variant="h5"
                component="h5"
                sx={{ fontWeight: "500" }}
                className="place-self-start m-0 p-0"
              >
                Refer a friend
              </Typography>
              <Button onClick={handleClose} className="place-self-end p-0 m-0">
                <CloseRounded />
              </Button>
            </Box>

            <Paper className="m-2">
              <form className="w-full p-8" onSubmit={handleSubmit(onSubmit)}>
                <LogoComponent />
                <TextField
                  id="referrerName"
                  label="Your Name"
                  variant="standard"
                  fullWidth
                  {...register("referrerName", {
                    required: "Name is required",
                  })}
                  error={!!errors.referrerName}
                  helperText={errors.referrerName?.message}
                />
                <TextField
                  id="referrerEmail"
                  label="Your Email"
                  variant="standard"
                  fullWidth
                  {...register("referrerEmail", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                  error={!!errors.referrerEmail}
                  helperText={errors.referrerEmail?.message}
                />
                <TextField
                  id="refereeName"
                  label="Friend's Name"
                  variant="standard"
                  fullWidth
                  {...register("refereeName", {
                    required: "Friend's name is required",
                  })}
                  error={!!errors.refereeName}
                  helperText={errors.refereeName?.message}
                />
                <TextField
                  id="refereeEmail"
                  label="Friend's Email"
                  variant="standard"
                  fullWidth
                  {...register("refereeEmail", {
                    required: "Friend's email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                  error={!!errors.refereeEmail}
                  helperText={errors.refereeEmail?.message}
                />
                <TextField
                  fullWidth
                  id="message"
                  label="Message"
                  variant="standard"
                  multiline
                  rows={2}
                  placeholder="Type your message here..."
                  {...register("message")}
                />

                <div className="flex items-center justify-between p-3">
                  <Button
                    variant="contained"
                    endIcon={<ClearAllRounded />}
                    onClick={() => reset()}
                  >
                    Reset
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    endIcon={<SendRounded />}
                    type="submit"
                  >
                    Send
                  </Button>
                </div>
              </form>
            </Paper>
          </Box>
        </Fade>
      </Modal>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleSnackbarClose} severity="success">
          Referral submitted successfully!
        </Alert>
      </Snackbar>
      <Snackbar
        open={errorSnackbarOpen}
        autoHideDuration={6000}
        onClose={handleErrorSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleErrorSnackbarClose} severity="error">
          {errorMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}

PopupModalForm.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default PopupModalForm;
