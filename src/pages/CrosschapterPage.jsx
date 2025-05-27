import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";

import CrosschapterLayer from "../components/CrosschapterLayer";

const CrosschapterPage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Connections" />

        {/* RoleAccessLayer */}
        <CrosschapterLayer />

      </MasterLayout>

    </>
  );
};

export default CrosschapterPage;
