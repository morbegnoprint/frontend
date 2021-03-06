import React from "react";
import {
    Overlay,
    Subtitle,
    Logo,
    RootGrid,
    WritingsGrid,
    BackgroundImage
} from "./styled";
import { SocialLink } from "../social-link";
import { Grid } from "../grid";
import { useStaticQuery, graphql } from "gatsby";
import logoImage from "../../images/logo.svg";
import { Hidden } from "../hidden";

export const Hero = () => {
    const { heroImage } = useStaticQuery(graphql`
        query {
            heroImage: file(relativePath: { eq: "hero.png" }) {
                childImageSharp {
                    fluid(quality: 90) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (
        <RootGrid container direction="column" justify="center" align="center">
            <BackgroundImage
                fluid={heroImage.childImageSharp.fluid}
                alt="Background image"
            />
            <Overlay />
            <WritingsGrid
                item
                container
                direction="column"
                align="center"
                justify="center"
                spacingRatio={4}
                xs={11}
            >
                <Grid item xs={10} sm={8} md={6} lg={4} xl={3}>
                    <Logo src={logoImage} alt="Logo" />
                </Grid>
                <Grid item>
                    <Subtitle>
                        <i>
                            Stampa e personalizzazione, proprio come vuoi tu...
                        </i>
                    </Subtitle>
                </Grid>
                <Hidden smUp>
                    <Grid
                        item
                        container
                        direction="column"
                        justify="center"
                        spacingRatio={4}
                    >
                        <Grid item>
                            <SocialLink type="facebook" />
                        </Grid>
                        <Grid item>
                            <SocialLink type="instagram" />
                        </Grid>
                    </Grid>
                </Hidden>
                <Hidden smDown>
                    <Grid item container spacingRatio={4}>
                        <Grid item>
                            <SocialLink type="facebook" />
                        </Grid>
                        <Grid item>
                            <SocialLink type="instagram" />
                        </Grid>
                    </Grid>
                </Hidden>
            </WritingsGrid>
        </RootGrid>
    );
};
