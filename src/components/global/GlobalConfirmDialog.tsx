"use client";
import { useConfirmDialog } from "@/store/global-confirm-dialog";
import { Button, Dialog, DialogContent } from "@mui/material";

function GlobalConfirmDialog() {
  const { open, message, onYes, onNo, hide } = useConfirmDialog();

  return (
    <Dialog open={open}>
      <DialogContent>
        <p>{message}</p>
        <div className="flex gap-2 justify-end">
          <Button
            onClick={() => {
              onNo?.();
              hide();
            }}>
            No
          </Button>
          <Button
            onClick={() => {
              onYes?.();
              hide();
            }}>
            Yes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default GlobalConfirmDialog;
