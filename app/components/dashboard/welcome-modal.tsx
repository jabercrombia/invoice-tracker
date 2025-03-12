"use client";

import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { useState, useEffect } from "react";
export default function AutoOpenDialog() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>Welcome!</DialogTitle>
      <DialogContent>All this data is sample data stored in a PostgreSQL Database.</DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)} variant="contained">Close</Button>
      </DialogActions>
    </Dialog>
  );
}
