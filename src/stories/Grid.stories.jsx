import React from "react";
import { Grid, Col, Row } from "../components";

export default {
    title: "Layout/Grid",
    component: Grid
}

export const GridWrapper = () => <Grid>TODO I don't know what to do</Grid>

export const OneColumn = () => <Grid><Row><Col size={7}>1 column span 7</Col></Row></Grid>;

export const TwoColumns = () => <Grid><Row><Col size={5}>1 column</Col><Col size={2}>Col 2</Col></Row></Grid>

export const TwoRows = () => {
    return (
        <Grid>
            <Row><Col size={7}>1 column span 7</Col></Row>
            <Row><Col size={3}>Size 3</Col><Col size={2}>Size 2</Col></Row>
        </Grid>
    )
};
