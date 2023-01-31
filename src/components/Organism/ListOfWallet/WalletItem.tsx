import React from 'react';
import { NavLink } from 'react-router-dom';
import { UrlTypes } from '../../../types/UrlTypes';
import styled from 'styled-components';
import { theme } from '../../../theme/mainTheme';
import { useTranslation } from 'react-i18next';

const LiWallet = styled.li`
  list-style-type: none;
  width: 233px;
  height: 30px;
`;
const ParagraphList = styled.p`
  font-family: 'Roboto-Regular', 'Roboto-Bold', 'Roboto-Italic', 'Roboto-Light', sans-serif;
  font-size: 16px;
  font-weight: ${theme.bold};
  color: ${({ color }) => (color ? color : theme.textColor)};
  word-wrap: break-word;
`;

const LinkOfWallet = styled.a`
  cursor: pointer;
  color: ${theme.textColor};
  text-decoration: none;

  &.active {
    text-decoration: underline;
  }
`;

export const WalletItems = ({ numberWalletUser }: any) => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <ul>
        <>
          <LiWallet key={numberWalletUser}>
            <ParagraphList>
              <LinkOfWallet
                as={NavLink}
                to={`/${UrlTypes.ListOfWallet}/${numberWalletUser}/operations`}>
                Operations
              </LinkOfWallet>
            </ParagraphList>
          </LiWallet>

          {/* <LiWallet> */}
          {/*   <ParagraphList> */}
          {/*     <LinkOfWallet */}
          {/*       as={NavLink} */}
          {/*       to={`/${UrlTypes.ListOfWallet}/${numberWalletUser}/overview`}> */}
          {/*       {t('Overview')} */}
          {/*     </LinkOfWallet> */}
          {/*   </ParagraphList> */}
          {/* </LiWallet> */}
          {/* <LiWallet> */}
          {/*   <ParagraphList> */}
          {/*     <LinkOfWallet */}
          {/*       as={NavLink} */}
          {/*       to={`/${UrlTypes.ListOfWallet}/${numberWalletUser}/summary`}> */}
          {/*       {t('Summary')} */}
          {/*     </LinkOfWallet> */}
          {/*   </ParagraphList> */}
          {/* </LiWallet> */}
          {/* <LiWallet> */}
          {/*   <ParagraphList> */}
          {/*     <LinkOfWallet */}
          {/*       as={NavLink} */}
          {/*       to={`/${UrlTypes.ListOfWallet}/${numberWalletUser}/reports`}> */}
          {/*       {t('Reports')} */}
          {/*     </LinkOfWallet> */}
          {/*   </ParagraphList> */}
          {/* </LiWallet> */}

          <LiWallet>
            <ParagraphList>
              <LinkOfWallet
                as={NavLink}
                to={`/${UrlTypes.ListOfWallet}/${numberWalletUser}/category`}>
                {t('Category')}
              </LinkOfWallet>
            </ParagraphList>
          </LiWallet>
        </>
      </ul>
    </>
  );
};
