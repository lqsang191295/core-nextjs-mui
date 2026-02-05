import { useGlobalAlert } from "./global-alert";
import { useConfirmDialog } from "./global-confirm-dialog";
import { useGlobalLoading } from "./global-loading";
import { useGlobalMessage } from "./global-message";

export const Global = {
  Loading: {
    Show: (msg?: string) => useGlobalLoading.getState().show(msg),
    Hide: () => useGlobalLoading.getState().hide(),
    SetMessage: (msg: string) => useGlobalLoading.getState().setMessage(msg),
  },
  Alert: {
    Show: (msg: string, type?: "success" | "error" | "info" | "warning") =>
      useGlobalAlert.getState().show(msg, type),
    Hide: () => useGlobalAlert.getState().hide(),
  },
  Message: {
    Show: (msg: string, type?: "success" | "error" | "info" | "warning") =>
      useGlobalMessage.getState().show(msg, type),
    Hide: () => useGlobalMessage.getState().hide(),
  },
  ConfirmDialog: {
    Show: (msg: string, onYes: () => void, onNo?: () => void) =>
      useConfirmDialog.getState().showConfirm(msg, onYes, onNo),
    Hide: () => useConfirmDialog.getState().hide(),
  },
};
