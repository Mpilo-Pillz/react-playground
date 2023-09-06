import React, { useEffect } from "react";
import useAddress from "../../components/user/useAddress";
import AddressItem from "../../components/user/AddressItem";
import { IAddress } from "../../components/user/types";
import useCheckout from "../../components/product/useCheckout";
import { Grid, Typography } from "@mui/material";

const Profile = () => {
  const { getUserAddresses } = useAddress();
  const { userAddresses } = useCheckout();

  useEffect(() => {
    getUserAddresses();
  }, [getUserAddresses]);

  console.log(userAddresses);

  return (
    <>
      <Typography variant="h4" textAlign={"center"} margin={2}>
        My Addresses
      </Typography>
      <Grid container spacing={2}>
        {userAddresses?.addresses?.map((address: IAddress) => {
          return (
            <Grid item xs={12} sm={12} md={8} lg={4} xl={3}>
              <AddressItem address={address} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Profile;
