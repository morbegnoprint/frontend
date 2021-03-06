import { Grid } from "../../grid";
import styled from "styled-components";

export const Root = styled(Grid)`
    background: #000;
    padding-top: ${props => props.theme.spacing.unit * 8}px;
    padding-bottom: ${props => props.theme.spacing.unit * 8}px;
    box-shadow: 0 -10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    color: #fff;
`;

export const ContactsSubtitle = styled.h3`
    color: #ef7c00;
`;

export const StyledLink = styled.a`
    color: rgb(239, 124, 0);
    font-weight: 700;
    font-style: italic;
    margin-left: ${props => props.theme.spacing.unit}px;
`;
