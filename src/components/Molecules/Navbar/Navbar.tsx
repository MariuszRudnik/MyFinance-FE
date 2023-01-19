import React from 'react';
import styled from 'styled-components';
import apps from '../../Assets/icons/apps.svg';
import ButtonIcon from '../../Atoms/ButtonIcon/ButtonIcon';
import Paragraph from '../../Atoms/Paragraph/Paragraph';
import Heading from '../../Atoms/Heading/Heading';
import { theme } from '../../../theme/mainTheme';
import bell from '../../Assets/icons/bell.svg';
import monitoring from '../../Assets/icons/monitoring.svg';
import logo from '../../Assets/iconsLogo/people.jpg';
import { useDispatch, useSelector } from 'react-redux';
import arrow from '../../Assets/icons/arrow.svg';
import { useTranslation } from 'react-i18next';
import { ArrowStyles, FlexDiv, Menu, MenuItem, NavWrapper, StyleDiv } from './style/navbar.style';
import ButtonIconsSidebar from '../../Atoms/ButtonIconSidebar/ButtonIconSidebar';
import { NavLink } from 'react-router-dom';
import { UrlTypes } from '../../../types/UrlTypes';
import { ContentButton } from '../../Atoms/ButtonIconSidebar/content/ContentButton';
import addIcon from '../../Assets/icons/add.svg';
import wallet from '../../Assets/icons/wallet.svg';
import settings from '../../Assets/icons/settings.svg';
import logout from '../../Assets/icons/logout.svg';
import { fetchLogout } from '../../../Redux/reducers/loginRedux';

const Image = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  border-radius: 10px;
  background-size: cover;
  box-shadow: 1px 1px 2px ${theme.textColor};
`;
const MenuWrapper = styled.div`
  position: relative;
  &:hover {
    display: block;
  }
`;

const MenuNavWrapperBar = styled.div`
  display: none;
  position: absolute;
  width: 282px;
  min-height: 100px;
  border-radius: 5px;
  &:hover {
    display: block;
  }
`;
const MenuNavBar = styled.div`
  background-color: ${theme.secondary};
  margin-top: 10px;
  width: 282px;
  min-height: 100px;
  border-radius: 10px;
  opacity: 86%;
  box-shadow: rgba(0, 0, 0, 0.11) 5px 5px 10px;
`;

const StyledLinksList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  &:hover {
    display: block;
  }
`;

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const dispatch: any = useDispatch();
  const logOut = () => {
    return dispatch(fetchLogout());
  };
  const data = useSelector((state: any) => state.login.data);
  return (
    <NavWrapper>
      <StyleDiv>
        <ButtonIcon icon={apps} color="white" />
        <Heading big={'18px'} color={theme.textColor}>
          My Finance
        </Heading>
        <Menu>
          <MenuItem>Blog</MenuItem>
          <MenuItem>Posts</MenuItem>
          <MenuItem>News</MenuItem>
          <MenuItem>Tips</MenuItem>
        </Menu>
      </StyleDiv>
      <StyleDiv>
        <ButtonIcon icon={monitoring}></ButtonIcon>
        <ButtonIcon icon={bell}></ButtonIcon>
        <MenuWrapper>
          <FlexDiv>
            <Image />
            <Paragraph>
              {t('Hello')} {data.firstName} {data.lastName} !
            </Paragraph>
            <ArrowStyles src={arrow} />
          </FlexDiv>
          <MenuNavWrapperBar>
            <MenuNavBar>
              <StyledLinksList>
                <li>
                  <ButtonIconsSidebar size="s" as={NavLink} to={'/' + UrlTypes.Setting}>
                    <ContentButton title={t('Settings')} icon={settings} />
                  </ButtonIconsSidebar>
                </li>
                <li>
                  <ButtonIconsSidebar size="s" as={NavLink} to={'/'} onClick={logOut}>
                    <ContentButton title={t('Log out')} icon={logout} />
                  </ButtonIconsSidebar>
                </li>
              </StyledLinksList>
            </MenuNavBar>
          </MenuNavWrapperBar>
        </MenuWrapper>
      </StyleDiv>
    </NavWrapper>
  );
};
