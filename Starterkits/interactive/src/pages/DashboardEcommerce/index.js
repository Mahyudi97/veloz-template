import React from "react";
import BreadCrumb from '../../Components/Common/BreadCrumb';

import { Container } from "reactstrap";

const DashboardEcommerce = () => {
  document.title = "Dashboard | Velzon - React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Dashboard" pageTitle="Dashboards" />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default DashboardEcommerce;
