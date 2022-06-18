import { styled } from "@mui/material/styles";
import { blue } from "@mui/material/colors";

export default function Button(ButtonProps) {
  const ColorButton =
    styled(Button) <
    ButtonProps >
    (({ theme }) => ({
      color: theme.palette.getContrastText(blue[500]),
      backgroundColor: blue[500],
      "&:hover": {
        backgroundColor: blue[700]
      }
    }));
  return <ColorButton>Custom CSS</ColorButton>;
}
