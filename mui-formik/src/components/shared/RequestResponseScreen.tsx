import React from "react";
import Box from "@material-ui/core/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Link from "@mui/material/Link";
import useShared from "./hooks/useShared";

interface Props {
  heading: string;
  bodyText: string;
  navigationLink: string;
}

const RequestResponseScreen: React.FC<Props> = ({
  heading,
  bodyText,
  navigationLink,
}) => {
  const { navigate } = useShared();
  return (
    <Card sx={{ p: 5 }}>
      <Box>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ color: "#1A5D1A" }}
        >
          {heading}
        </Typography>
        <Typography
          id="modal-modal-title"
          variant="h1"
          component="h1"
          textAlign={"center"}
          sx={{ color: "#1A5D1A" }}
        >
          <ThumbUpIcon />
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {bodyText}
        </Typography>
        <Box textAlign={"center"}>
          <Link
            sx={{ mt: 2 }}
            component="button"
            variant="body2"
            onClick={() => {
              navigate(navigationLink);
            }}
          >
            Go to Profile
          </Link>
        </Box>
      </Box>
    </Card>
  );
};

export default RequestResponseScreen;
