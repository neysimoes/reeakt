import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.div`
  flex: 1;
  padding: 0 20px;
`;

export const AboutTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;
`;

export const Techs = styled.ul`
  margin: 0;
  padding: 0;
`;

export const Tech = styled.li`
  margin-bottom: 8px;
  font-size: 16px;
`;

export const CLI = styled.div`
  margin-bottom: 20px;
`;

export const CLILabel = styled.h4`
  font-size: 16px;
  margin-right: 15px;
  margin: 0 0 20px 0;
  padding: 0;
`;

export const CLICommand = styled.pre`
  margin: 0;
  padding: 0;
`;
