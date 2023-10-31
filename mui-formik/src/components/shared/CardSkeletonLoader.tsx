import React from "react";
import Skeleton from "@mui/material/Skeleton";
import { Card, CardContent, Grid } from "@mui/material";
import { CardOverflow } from "@mui/joy";
import { AspectRatio } from "@mui/icons-material";

interface Props {
  withAspect?: boolean;
}

const CardSkeletonLoader: React.FC<Props> = ({ withAspect = false }) => {
  return (
    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
      <Card sx={{ width: 320, maxWidth: "100%", boxShadow: "lg", my: 3 }}>
        <CardOverflow>
          {withAspect ? (
            <AspectRatio sx={{ minWidth: 200 }}>
              <Skeleton variant="rectangular" width={286} height={200} />
            </AspectRatio>
          ) : (
            <CardOverflow>
              <Skeleton variant="rectangular" width={"100%"} height={250} />
            </CardOverflow>
          )}
        </CardOverflow>
        <CardContent>
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CardSkeletonLoader;
