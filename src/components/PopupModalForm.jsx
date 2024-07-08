import {
  ClearAllRounded,
  Close,
  CloseRounded,
  SendRounded,
} from "@mui/icons-material";
import {
  Backdrop,
  Box,
  Button,
  Fade,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import React, { useState } from "react";

import logo from "../assets/images/logo.png.png";

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

function PopupModalForm({ open, setOpen }) {
  /* const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);*/
  const handleClose = () => setOpen(false);
  return (
    <div>
      <button>Modal Open</button>
      <div>
        {/*  <Button onClick={handleOpen}>Open modal</Button> */}
        <Modal
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
                  Refere a friend
                </Typography>

                <Button
                  onClick={handleClose}
                  className="place-self-end p-0 m-0"
                >
                  <CloseRounded />
                </Button>
              </Box>

              <Paper className="m-2">
                <form className="w-full p-8">
                  <img src={logo} alt="logo" className="w-24 items-center" />
                  <TextField
                    id="name"
                    label="Name"
                    variant="standard"
                    fullWidth
                  />
                  <TextField
                    id="email"
                    label="Email"
                    variant="standard"
                    fullWidth
                  />
                  <TextField
                    id="friend-name"
                    label="Friend's Name"
                    variant="standard"
                    fullWidth
                  />
                  <TextField
                    id="friend-email"
                    label="Friend's Email"
                    variant="standard"
                    fullWidth
                  />
                  <TextField
                    fullWidth
                    id="message"
                    label="Message"
                    variant="standard"
                    multiline
                    rows={2}
                    placeholder="Type your message here..."
                  />

                  <div className="flex items-center justify-between p-3">
                    <Button
                      variant="contained"
                      endIcon={<ClearAllRounded />}
                      type="reset"
                    >
                      Reset
                    </Button>
                    <Button
                      variant="contained"
                      endIcon={<Close />}
                      onClick={handleClose}
                    >
                      Close
                    </Button>
                  </div>
                  <div className="flex justify-center">
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      endIcon={<SendRounded />}
                    >
                      Send
                    </Button>
                  </div>
                </form>
              </Paper>
            </Box>
          </Fade>
        </Modal>
      </div>
    </div>
  );
}

export default PopupModalForm;
