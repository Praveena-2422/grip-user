import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import AddUserLayer from "../components/AddUserLayer";


const AddUserPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Profile" />

        {/* AddUserLayer */}
        <AddUserLayer />


      </MasterLayout>
    </>
  );
};

export default AddUserPage;
