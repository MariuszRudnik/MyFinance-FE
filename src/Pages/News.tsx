import React from 'react';
import { UserPageTemplates } from '../templates/UserPageTemplates';
import { theme } from '../theme/mainTheme';
import { Card } from '../components/Molecules/Card/Card';
import Input from '../components/Atoms/Input/Input';
import Heading from '../components/Atoms/Heading/Heading';
import styled from 'styled-components';
import { connect } from 'react-redux';

const StyledGridWrapper = styled.div`
  padding: 25px 150px 25px 70px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;
`;
const StyledPageHeader = styled.div``;

const News = ({ books }: any) => {
  console.log('books');
  console.log(books);
  return (
    <UserPageTemplates activeColor={theme.secondary}>
      <StyledPageHeader>
        <Input search />
        <Heading>News</Heading>
      </StyledPageHeader>
      <StyledGridWrapper>
        <Card activeColor={'secondary'} />
        <Card activeColor={'secondary'} />
        <Card activeColor={'secondary'} />
        <Card activeColor={'secondary'} />
        <Card activeColor={'secondary'} />
      </StyledGridWrapper>
    </UserPageTemplates>
  );
};

const mapStateToProps = (state: any) => {
  const { books } = state;
  return { books };
};
export default connect(mapStateToProps)(News);
