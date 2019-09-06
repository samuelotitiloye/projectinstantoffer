import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { checkBoolean, checkString } from '../helpers/valueCheckerHelpers'

//Material UI
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { TextField, Radio, RadioGroup } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

class ListingCategory6 extends Component {
    state = {
        id: this.props.match.params.id,
        answers: {
            L163: checkBoolean(this.props.listingAnswers.L163),
            L164: checkBoolean(this.props.listingAnswers.L164),
            L165A: checkString(this.props.listingAnswers.L165A),
        }
    }

    handleChangeForInputs = (propertyName) => (event) => {
        this.setState({
            ...this.state,
            answers: {
                ...this.state.answers, [propertyName]: event.target.value,
            }
        })
    }
    handleClick = () => {
        this.props.history.push(`/ListingCategory5/${this.state.id}`)
    }

    handleClickNext = () => {
        this.props.dispatch({ type: 'SAVE_ANSWERS', payload: this.state })
        this.props.history.push(`/ListingCategory7/${this.state.id}`)
    }

    render() {
        return (
            <div>
                <Container component="main">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <center>
                                <h2>Closing Services</h2>
                            </center>
                            <h4>Seller wishes to have a Broker arrange for the closing?</h4>
                            <RadioGroup
                                value={this.state.answers.L163}
                                onChange={this.handleChangeForInputs('L163')}>
                                <FormControlLabel value='true' control={<Radio color="primary" />} label="Yes" />
                                <FormControlLabel value='false' control={<Radio color="primary" />} label="No" />
                            </RadioGroup>
                            <h4>Seller shall arrange for a qualified closing agent or Seller's attorney to conduct the closing?</h4>
                            <RadioGroup
                                value={this.state.answers.L164}
                                onChange={this.handleChangeForInputs('L164')}>
                                <FormControlLabel value='true' control={<Radio color="primary" />} label="Yes" />
                                <FormControlLabel value='false' control={<Radio color="primary" />} label="No" />
                            </RadioGroup>
                        </Grid>
                        <br />
                        <br />
                        <Grid item xs={12}>
                            <TextField
                                label="Seller's Initials"
                                fullWidth
                                variant="outlined"
                                value={this.state.answers.L165A}
                                onChange={this.handleChangeForInputs('L165A')}
                            />
                        </Grid>
                    </Grid>
                </Container>
                <br />
                <br />
                <Container component="main">
                    <Grid container spacing={3}>
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
export default connect(mapReduxStateToProps)(withRouter(ListingCategory6));