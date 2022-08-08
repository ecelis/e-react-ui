import React from "react";
import { Grid, Col, Row } from "..";

export default {
    title: "Layout/Grid",
    component: Grid
}

export const GridContainer = () => {
    return (
        <Grid>
            <Row>
                <Col size={1} border="thin dashed var(--primary)">One of three columns</Col>
                <Col size={1} border="thin dashed var(--primary)">Two of three columns</Col>
                <Col size={1} border="thin dashed var(--primary)">Three of three columns</Col>
            </Row>
        </Grid>
    );
}

export const OneColumn = () => {
    return (
        <Grid>
            <Row>
                <Col size={7} justify="center" border="thin dashed var(--primary)">1 column span 7</Col>
            </Row>
        </Grid>
    )
};

export const TwoRows = () => {
    return (
        <Grid color="white">
            <Row><Col size={7} border="thin dashed var(--primary)">1 row, column span 7</Col></Row>
            <Row>
                <Col size={3} border="thin dashed var(--primary)">
                    Column size 3
                </Col>
                <Col size={2}  border="thin dashed var(--primary)">
                    Column size 2
                </Col>
            </Row>
        </Grid>
    )
};

export const Table = () => {
    return (
        <Grid background="white"
            fontFamily="arial, 'sans-serif'">
            <Row background="var(--primary)"
                color="var(--light)">
                <Col size={7}
                    justify="center">Table Title</Col>
            </Row>
            <Row hoverColor="var(--blue-grey-300)">
                <Col size={3} justify="right"
                border="thin solid black">Apples</Col>
                <Col size={2} 
                    border="thin solid black">2</Col>
            </Row>
            <Row hoverColor="var(--blue-grey-300)">
                <Col size={3} 
                    border="thin solid black">Bananas</Col>
                <Col size={2}
                    border="thin solid black">5</Col>
            </Row>
        </Grid>
    )
};
