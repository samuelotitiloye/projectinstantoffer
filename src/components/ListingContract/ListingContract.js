import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

//Material UI
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';

const styles = {
    title: {
        margin: '25px 0px 25px 40px',
        color: '#173F5F',
    },
};

class ListingContract extends Component {
    state = {
        id: this.props.match.params.id,
    }

    componentDidMount() {
        this.props.dispatch({
            type: 'LISTING_ANSWERS', payload: this.props.match.params.id
        })

    }

    handleClick = (propertyName) => (event) => {
        this.props.history.push(`${[propertyName]}`);
    }

    handleClickSign = () => {
        this.props.history.push(`/Signature/${this.state.id}`)
    }

    render() {
        return (
            <div>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                <Container component="main" maxWidth="lg">
                    <center>
                        <h2>Listing Contract</h2>
                        <h4>Please answer the following questions pertaining to the Listing Offer.</h4>
                    </center>
                    <CardActionArea>
                        <Card onClick={this.handleClick(`/ListingCategory1/${this.state.id}`)} value="/ListingCategory1">
                            <Grid item xs={12} container spacing={3}>
                                <Grid item xs={11}>
                                    <div style={styles.title}>
                                        <h2>General Information</h2>
                                    </div>
                                </Grid>
                                <Grid
                                    item xs={1}
                                    className="arrow"
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="center">
                                    <i className="material-icons">arrow_forward_ios</i>
                                </Grid>
                            </Grid>
                        </Card>
                    </CardActionArea>
                    <br />
                    <CardActionArea>
                        <Card onClick={this.handleClick(`/ListingCategory2/${this.state.id}`)} value="/ListingCategory2">
                            <Grid item xs={12} container spacing={3}>
                                <Grid item xs={11}>
                                    <div style={styles.title}>
                                        <h2>MLS Data Feed Options</h2>
                                    </div>
                                </Grid>
                                <Grid
                                    item xs={1}
                                    className="arrow"
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="center">
                                    <i className="material-icons">arrow_forward_ios</i>
                                </Grid>
                            </Grid>
                        </Card>
                    </CardActionArea>
                    <br />
                    <CardActionArea>
                        <Card onClick={this.handleClick(`/ListingCategory3/${this.state.id}`)} value="/ListingCategory3">
                            <Grid item xs={12} container spacing={3}>
                                <Grid item xs={11}>
                                    <div style={styles.title}>
                                        <h2>Listed for Lease</h2>
                                    </div>
                                </Grid>
                                <Grid
                                    item xs={1}
                                    className="arrow"
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="center">
                                    <i className="material-icons">arrow_forward_ios</i>
                                </Grid>
                            </Grid>
                        </Card>
                    </CardActionArea>
                    <br />
                    <CardActionArea>
                        <Card onClick={this.handleClick(`/ListingCategory4/${this.state.id}`)} value="/ListingCategory4">
                            <Grid item xs={12} container spacing={3}>
                                <Grid item xs={11}>
                                    <div style={styles.title}>
                                        <h2>Broker's Compensation</h2>
                                    </div>
                                </Grid>
                                <Grid
                                    item xs={1}
                                    className="arrow"
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="center">
                                    <i className="material-icons">arrow_forward_ios</i>
                                </Grid>
                            </Grid>
                        </Card>
                    </CardActionArea>
                    <br />
                    <CardActionArea>
                        <Card onClick={this.handleClick(`/ListingCategory5/${this.state.id}`)} value="/ListingCategory5">
                            <Grid item xs={12} container spacing={3}>
                                <Grid item xs={11}>
                                    <div style={styles.title}>
                                        <h2>Compensation Disclosure</h2>
                                    </div>
                                </Grid>
                                <Grid
                                    item xs={1}
                                    className="arrow"
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="center">
                                    <i className="material-icons">arrow_forward_ios</i>
                                </Grid>
                            </Grid>
                        </Card>
                    </CardActionArea>
                    <br />
                    <CardActionArea>
                        <Card onClick={this.handleClick(`/ListingCategory6/${this.state.id}`)} value="/ListingCategory6">
                            <Grid item xs={12} container spacing={3}>
                                <Grid item xs={11}>
                                    <div style={styles.title}>
                                        <h2>Closing Service</h2>
                                    </div>
                                </Grid>
                                <Grid
                                    item xs={1}
                                    className="arrow"
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="center">
                                    <i className="material-icons">arrow_forward_ios</i>
                                </Grid>
                            </Grid>
                        </Card>
                    </CardActionArea>
                    <br />
                    <CardActionArea>
                        <Card onClick={this.handleClick(`/ListingCategory7/${this.state.id}`)} value="/ListingCategory7">
                            <Grid item xs={12} container spacing={3}>
                                <Grid item xs={11}>
                                    <div style={styles.title}>
                                        <h2>Foreign Investment in Real Property Tax Act (FIRPTA)</h2>
                                    </div>
                                </Grid>
                                <Grid
                                    item xs={1}
                                    className="arrow"
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="center">
                                    <i className="material-icons">arrow_forward_ios</i>
                                </Grid>
                            </Grid>
                        </Card>
                    </CardActionArea>
                    <br />
                    <CardActionArea>
                        <Card onClick={this.handleClick(`/ListingCategory8/${this.state.id}`)} value="/ListingCategory8">
                            <Grid item xs={12} container spacing={3}>
                                <Grid item xs={11}>
                                    <div style={styles.title}>
                                        <h2>Agency Representation</h2>
                                    </div>
                                </Grid>
                                <Grid
                                    item xs={1}
                                    className="arrow"
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="center">
                                    <i className="material-icons">arrow_forward_ios</i>
                                </Grid>
                            </Grid>
                        </Card>
                    </CardActionArea>
                </Container>
                <br />
                <Container>
                    <Grid item xs={12}>
                        <div align="right"
                            className="Button">
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={this.handleClickSign}
                            >
                                Sign
                            </Button>
                        </div>
                    </Grid>
                    <br />
                </Container>
            </div>
        )
    }
}


const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(ListingContract));

