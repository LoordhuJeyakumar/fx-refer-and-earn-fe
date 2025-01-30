import { useState } from "react";
import { TextField, Button, Typography, Alert, Snackbar } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import Navbar from "./Navbar";

const ContactUs = () => {
  const { control, handleSubmit, reset } = useForm();
  const [showSnackbar, setShowSnackbar] = useState(false);

  const onSubmit = (data) => {
    setShowSnackbar(true);
    reset();
    console.log(data); // Add your form submission logic here
  };

  return (
    <div>
      <Navbar />
      <div className="p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto">
        <Typography
          variant="h4"
          className="mb-4 text-center text-blue-600 font-bold"
        >
          Contact Us
        </Typography>
        <Typography variant="body1" className="mb-4 text-gray-700">
          If you have any questions or inquiries, please fill out the contact
          form below.
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Name"
                variant="outlined"
                fullWidth
                required
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                variant="outlined"
                fullWidth
                required
              />
            )}
          />
          <Controller
            name="message"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                required
              />
            )}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="w-full py-2"
          >
            Submit
          </Button>
        </form>
        <Snackbar
          open={showSnackbar}
          autoHideDuration={6000}
          onClose={() => setShowSnackbar(false)}
        >
          <Alert
            onClose={() => setShowSnackbar(false)}
            severity="success"
            sx={{ width: "100%" }}
          >
            Your message has been submitted!
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};

export default ContactUs;
