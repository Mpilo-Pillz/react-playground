import React from "react";
import { IAddress } from "./types";
import { Card, CardContent, Typography } from "@mui/joy";

interface Props {
  address: IAddress;
}
const AddressItem: React.FC<Props> = ({ address }) => {
  return (
    <Card variant="solid" sx={{ m: 2 }}>
      <CardContent>
        <Typography level="title-md" textColor="inherit" fontWeight={"bold"}>
          Street Number
        </Typography>
        <Typography textColor="inherit">{address.streetNumber}</Typography>
        <Typography level="title-md" textColor="inherit" fontWeight={"bold"}>
          Street Name
        </Typography>
        <Typography textColor="inherit">{address.streetName}</Typography>
        <Typography level="title-md" textColor="inherit" fontWeight={"bold"}>
          Region
        </Typography>
        <Typography textColor="inherit">{address.region}</Typography>
        <Typography level="title-md" textColor="inherit" fontWeight={"bold"}>
          Postal Code
        </Typography>
        <Typography textColor="inherit">{address.postalCode}</Typography>
      </CardContent>
    </Card>
  );
};

export default AddressItem;
