import React, { Component } from "react";
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import ListingDraftsIndividualDocs from "../ListingDraftsIndividualDocs/ListingDraftsIndividualDocs";

//Material UI
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

class ListingDrafts extends Component {
    render() {
        return (
            <div>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                <Container component="main" maxWidth="lg">
                    <br />
                    <center>
                        <Button>Listing Contract</Button>
                        <Button>Purchase Agreement</Button>
                    </center>
                    <br />
                    <br />
                    <Card>
                        <Grid item xs={12} container spacing={3}>
                            <Grid item xs={10}>
                                <div style={styles.title}>
                                    <h3>John Doe's Purchase Agreement</h3>
                                    <p>August 1, 2019</p>
                                </div>
                            </Grid>
                            <Grid
                                item xs={2}
                                className="arrow"
                                container
                                direction="row"
                                justify="center"
                                alignItems="center">
                                <i className="material-icons">arrow_forward_ios</i>
                            </Grid>
                        </Grid>
                    </Card>
                    <br />
                    <Card>
                        <Grid item xs={12} container spacing={3}>
                            <Grid item xs={10}>
                                <div style={styles.title}>
                                    <h3>Bob's Purchase Agreement</h3>
                                    <p>August 1, 2019</p>
                                </div>
                            </Grid>
                            <Grid
                                item xs={2}
                                className="arrow"
                                container
                                direction="row"
                                justify="center"
                                alignItems="center">
                                <i className="material-icons">arrow_forward_ios</i>
                            </Grid>
                        </Grid>
                    </Card>
                    <ListingDraftsIndividualDocs />
                </Container>
            </div>
        )
    }
}



const mapReduxStateToProps = reduxState => ({reduxState})
export default connect (mapReduxStateToProps)(withRouter(ListingDrafts));

