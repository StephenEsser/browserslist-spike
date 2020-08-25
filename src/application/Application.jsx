import React from 'react';
import TerraApplication from 'terra-application';
import './Application.module.scss';

const Application = () => {
  return (
    <TerraApplication
      applicationName="Terra Dashboard"
      applicationVersion="1.0.0"
      applicationAboutPageUrl="https://github.cerner.com/orion/terra-dashboard"
      applicationHelpPageUrl="https://github.cerner.com/orion/terra-dashboard"
    >
      Example Application
    </TerraApplication>
  );
};

export default Application;
