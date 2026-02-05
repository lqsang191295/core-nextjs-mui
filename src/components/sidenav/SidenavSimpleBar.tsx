import SimpleBar, { SimpleBarProps } from "@/components/base/SimpleBar";
import { PropsWithChildren } from "react";

const SidenavSimpleBar = ({
  children,
  sx,
  ...props
}: PropsWithChildren<SimpleBarProps>) => {
  return (
    <SimpleBar
      {...props}
      autoHide
      sx={{
        height: 1,
        "& .simplebar-track": {
          "&.simplebar-vertical": {
            "& .simplebar-scrollbar": {
              "&:before": {
                backgroundColor: "chGrey.300",
              },
            },
          },
        },
        ...sx,
      }}>
      {children}
    </SimpleBar>
  );
};

export default SidenavSimpleBar;
