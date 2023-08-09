import React from "react";
import useAddress from "../../components/user/useAddress";
import AddressItem from "../../components/user/AddressItem";
import { IAddress } from "../../components/user/types";

const Profile = () => {
  const { addresses } = useAddress();

  return addresses.map((address: IAddress) => {
    return <AddressItem address={address} />;
  });
};

export default Profile;
