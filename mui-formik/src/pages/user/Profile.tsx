import React, { useEffect } from "react";
import useAddress from "../../components/user/useAddress";
import AddressItem from "../../components/user/AddressItem";
import { IAddress } from "../../components/user/types";
import useCheckout from "../../components/product/useCheckout";

const Profile = () => {
  const { getUserAddresses } = useAddress();
  const { userAddresses } = useCheckout();

  useEffect(() => {
    getUserAddresses();
  }, [getUserAddresses]);

  console.log(userAddresses);

  return userAddresses?.addresses?.map((address: IAddress) => {
    return <AddressItem address={address} />;
  });
};

export default Profile;
