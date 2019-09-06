import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { checkString } from '../helpers/valueCheckerHelpers';

//Material UI
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
// import { classPrivateProperty } from "@babel/types";

class PurchaseCategory3 extends Component {
    state = {
        id: this.props.match.params.id,
        answers: {
            L45: checkString(this.props.purchaseAnswers.L45),
        }
    }


    handleChangeDate = (propertyName) => (event) => {
        this.setState({
            ...this.state,
            answers: {
                ...this.state.answers, [propertyName]: event.target.value,
            }
        })
    }

    handleClick = () => {
        this.props.history.push(`/PurchaseCategory2/${this.state.id}`)
    }

    handleClickNext = () => {
        this.props.dispatch({ type: 'SAVE_ANSWERS_FOR_PURCHASE', payload: this.state })
        this.props.history.push(`/PurchaseCategory4/${this.state.id}`)
    }

    render() {
        return (
            <div>
                <Container component="main">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <center>
                                <h2>Closing Date</h2>
                            </center>
                            <h4>Date</h4>
                            <TextField
                                id="date"
                                variant="outlined"
                                type="date"
                                value={this.state.answers.L45}
                                onChange={this.handleChangeDate('L45')}
                            />
                        </Grid>
                    </Grid>
                </Container>
                <br />
                <br />
                <Container component="main">
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <div align="left" className="Button">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleClick}
                                >
                                    Back
                </Button>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div align="right" className="Button">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleClickNext}
                                >
                                    Next
                </Button>

                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => reduxState 
export default connect(mapReduxStateToProps)(withRouter(PurchaseCategory3));