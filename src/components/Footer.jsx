import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box
      sx={{
        textAlign: "center",
        borderTop: "1px solid #776f6d",
        padding: "10px 0",
      }}
    >
      <Typography variant="body2">
        Designed and Developed by &copy;Pramod Boda
      </Typography>
    </Box>
  );
}
