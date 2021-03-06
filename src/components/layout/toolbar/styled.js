import { Grid } from "../../grid";
import styled, { css } from "styled-components";
import { Link } from "gatsby";
import { MobileMenu } from "./mobile-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled(Grid)`
    height: ${props => props.theme.spacing.unit * 16}px;
    padding: 0 ${props => props.theme.spacing.unit * 8}px;
    background: rgba(255, 255, 255, ${props => (props.hero ? 0 : 1)});
    color: ${props => (props.hero ? "#fff" : "#000")};
    box-shadow: ${props =>
        props.hero
            ? 0
            : css`0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)`};
    transition: background ease 0.2s, box-shadow ease 0.2s, color ease 0.2s;
    position: fixed;
    z-index: 10;
    top: 0;
    width: 100%;
`;

export const Item = styled(Link)`
    font-size: ${props => props.theme.spacing.unit * 4}px;
    font-weight: 700;
    text-decoration: none;
    color: inherit;
`;

export const StyledMobileMenuIcon = styled(FontAwesomeIcon)`
    font-size: ${props => props.theme.spacing.unit * 6}px;
`;

export const AnimatedMobileMenu = styled(MobileMenu)`
    position: fixed;
    right: 0;
    left: 0;
    top: ${props => (props.open ? "0" : "-100%")};
    background: #fff;
    color: #000;
    transition: top ease 0.3s;
    z-index: 11;
`;
