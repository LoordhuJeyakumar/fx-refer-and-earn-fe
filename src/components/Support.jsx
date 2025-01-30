import { useState } from "react";
import { TextField, Button, Typography, Alert, Snackbar } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

const Support = () => {
  const { control, handleSubmit, reset } = useForm();
  const [showSnackbar, setShowSnackbar] = useState(false);

  const onSubmit = (data) => {
    setShowSnackbar(true);
    reset();
    console.log(data); // Add your form submission logic here
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg  mx-auto flex flex-col items-center">
      <Typography
        variant="h4"
        className="mb-4 text-center text-blue-600 font-bold"
      >
        Support
      </Typography>
      <Typography variant="body1" className="mb-4 text-gray-700">
        If you need any assistance, please fill out the form below and our
        support team will get back to you as soon as possible.
      </Typography>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 flex flex-wrap justify-between gap-8 max-w-md"
      >
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
          name="phone"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Phone"
              variant="outlined"
              fullWidth
              required
            />
          )}
        />
        <Controller
          name="issue"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Describe your issue"
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
          Your issue has been submitted!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Support;
