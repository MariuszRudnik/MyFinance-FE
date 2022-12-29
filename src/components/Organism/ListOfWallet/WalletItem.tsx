import React from 'react';
import { NavLink } from 'react-router-dom';
import { UrlTypes } from '../../../types/UrlTypes';
import styled from 'styled-components';
import { theme } from '../../../theme/mainTheme';

const LiWallet = styled.li`
  list-style-type: none;
  width: 233px;
  height: 30px;
`;
const ParagraphList = styled.p`
  font-family: 'Roboto-Regular', 'Roboto-Bold', 'Roboto-Italic', 'Roboto-Light', sans-serif;
  font-size: 16px;
  font-weight: ${theme.bold};
  color: ${({ color }) => (color ? color : theme.gray400)};
  word-wrap: break-word;
`;

const LinkOfWallet = styled.a`
  cursor: pointer;
  color: ${theme.gray400};
  text-decoration: none;

  &.active {
    text-decoration: underline;
  }
`;

export const WalletItems = ({ numberWalletUser }: any) => {
  return (
    <>
      <ul>
        <>
          <LiWallet>
            <ParagraphList>
              <LinkOfWallet
                as={NavLink}
                to={`/${UrlTypes.ListOfWallet}/${numberWalletUser}/add-wallet`}>
                Add transaction
              </LinkOfWallet>
            </ParagraphList>
          </LiWallet>

          <LiWallet>
            <ParagraphList>
              <LinkOfWallet
                as={NavLink}
                to={`/${UrlTypes.ListOfWallet}/${numberWalletUser}/category`}>
                Category
              </LinkOfWallet>
            </ParagraphList>
          </LiWallet>
          <LiWallet key={numberWalletUser}>
            <ParagraphList>
              <LinkOfWallet
                as={NavLink}
                to={`/${UrlTypes.ListOfWallet}/${numberWalletUser}/wallet`}>
                Wallet
              </LinkOfWallet>
            </ParagraphList>
          </LiWallet>
        </>
      </ul>
    </>
  );
};
