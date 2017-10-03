import React from 'react';
import Helmet from 'react-helmet';
import { Wrapper, Content, DocsTitle, Techs, Tech, CLI, CLILabel, CLICommand } from '~pages/Docs/UI';

const Docs = () => {
  return (
    <Wrapper>
      <Helmet title={'Docs - reeakt'} />
      <Content>
        <DocsTitle>Support</DocsTitle>

        <Techs>
          <Tech>SSR <small>(Server-Side Rendering)</small></Tech>
          <Tech>react</Tech>
          <Tech>react-router v4</Tech>
          <Tech>redux</Tech>
          <Tech>redux-saga</Tech>
          <Tech>immutable.js</Tech>
          <Tech>redux-immutable</Tech>
          <Tech>styled-components v2</Tech>
          <Tech>HMR <small>(Hot Module Reload)</small></Tech>
          <Tech>webpack 3</Tech>
          <Tech>webpack-bundle-analyzer</Tech>
          <Tech>jest & enzyme</Tech>
          <Tech>eslint</Tech>
          <Tech>ducks <small>(a modern and optimized way to work with redux structure)</small></Tech>
          <Tech>axios</Tech>
          <Tech>express</Tech>
        </Techs>
      </Content>

      <Content>
        <DocsTitle>Command Line Tools</DocsTitle>

        <CLI>
          <CLILabel>Run the Development Mode</CLILabel>
          <CLICommand>$ npm run dev</CLICommand>
        </CLI>

        <CLI>
          <CLILabel>Run the Production Mode</CLILabel>
          <CLICommand>$ npm run prod</CLICommand>
        </CLI>

        <CLI>
          <CLILabel>Build and Run the Production Server</CLILabel>
          <CLICommand>$ npm run build && npm run start</CLICommand>
        </CLI>

        <CLI>
          <CLILabel>Run the tests</CLILabel>
          <CLICommand>$ npm run test</CLICommand>
        </CLI>

        <CLI>
          <CLILabel>Run the bundle-analyzer</CLILabel>
          <CLICommand>$ npm run bundle-analyzer</CLICommand>
        </CLI>
      </Content>
    </Wrapper>
  );
};

export default Docs;
