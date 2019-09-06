import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { checkBoolean } from '../helpers/valueCheckerHelpers'

//Material UI
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

class ListingCategory7 extends Component {

    state = {
        id: this.props.match.params.id,
        answers: {
            L175: checkBoolean(this.props.listingAnswers.L175)
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
        this.props.history.push(`/ListingCategory6/${this.state.id}`)
    }

    handleClickNext = () => {
        this.props.dispatch({ type: 'SAVE_ANSWERS', payload: this.state })
        this.props.history.push(`/ListingCategory8/${this.state.id}`)
    }

    render() {
        return (
            <div>
                <Container component="main">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <center>
                                <h2>Foreign Investment</h2>
                            </center>
                            <h4>Seller represents and warrants that seller is a foreign person for purpose of income taxation</h4>
                            <RadioGroup
                                value={this.state.answers.L175}
                                onChange={this.handleChangeForInputs('L175')}>
                                <FormControlLabel value='true' control={<Radio color="primary" />} label="Yes" />
                                <FormControlLabel value='false' control={<Radio color="primary" />} label="No" />
                            </RadioGroup>
                            <h4>Due to the complexity and potential risks of failing to comply with FIRPTA, Seller should <b>seek appropriate legal and tax advice regarding FIRPTA compliance, as Broker will be unable to confirm whether Seeker is a foreign person or whether the withholding requirements of FIRPTA apply.</b> </h4>
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
            </div >
        )
    }
}

const mapReduxStateToProps = reduxState => reduxState
export default connect(mapReduxStateToProps)(withRouter(ListingCategory7));