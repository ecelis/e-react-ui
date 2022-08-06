import React from "react";
import { Grid, Col, Row } from "..";

export const IntroPage = () => {
    return (
        <Grid>
            <Row><Col size={7}>1 column span 7</Col></Row>
            <Row><Col size={3}>Size 3</Col><Col size={2}>Size 2</Col></Row>
        </Grid>
    )
};

export default {
    title: "Introduction",
    component: IntroPage
}

