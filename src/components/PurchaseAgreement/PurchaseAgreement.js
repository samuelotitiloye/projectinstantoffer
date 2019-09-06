import React, { Component } from "react";
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

//Material UI
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';

const styles = {
    title: {
        margin: '25px 0px 25px 40px',
    },
};


class PurchaseAgreement extends Component {

    state = {
        id: this.props.match.params.id,
    }

    handleClick = (propertyName) => (event) => {
        this.props.history.push(`${[propertyName]}`);
    }

    handleClickSign = () => {
        this.props.history.push(`/PurchaseSignature/${this.state.id}`);
    }

    render() {
        return (
            <div>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                <Container component="main" maxWidth="lg">
                    <center>
                        <h2>Purchase Agreement</h2>
                        <h4>Please answer the following questions pertaining to the Purchase Agreement.</h4>
                    </center>
                    <CardActionArea>
                    <Card id="generalInfo" onClick={this.handleClick(`/PurchaseCategory1/${this.state.id}`)} value="/PurchaseCategory1" >
                        <Grid item xs={12} container spacing={3}>
                            <Grid item xs={11}>
                                <div style={styles.title}>
                                    <h2>General Information</h2>
                                </div>
                            </Grid>
                            <Grid id="generalInfoCard"
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
                    <Card onClick={this.handleClick(`/PurchaseCategory2/${this.state.id}`)} value="/PurchaseCategory2">
                        <Grid item xs={12} container spacing={3}>
                            <Grid item xs={11}>
                                <div style={styles.title}>
                                    <h2>Purchase Price</h2>
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
                    <Card onClick={this.handleClick(`/PurchaseCategory3/${this.state.id}`)} value="PurchaseCategory3">
                        <Grid item xs={12} container spacing={3}>
                            <Grid item xs={11}>
                                <div style={styles.title}>
                                    <h2>Closing Date</h2>
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
                    <Card onClick={this.handleClick(`/PurchaseCategory4/${this.state.id}`)} value="PurchaseCategory4">
                        <Grid item xs={12} container spacing={3}>
                            <Grid item xs={11}>
                                <div style={styles.title}>
                                    <h2>Mortgage Financing</h2>
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
                    <Card onClick={this.handleClick(`/PurchaseCategory5/${this.state.id}`)} value="PurchaseCategory5">
                        <Grid item xs={12} container spacing={3}>
                            <Grid item xs={11}>
                                <div style={styles.title}>
                                    <h2>Seller's Contribution to Buyer's Cost</h2>
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
                    <Card onClick={this.handleClick(`/PurchaseCategory6/${this.state.id}`)} value="PurchaseCategory6">
                        <Grid item xs={12} container spacing={3}>
                            <Grid item xs={11}>
                                <div style={styles.title}>
                                    <h2>Inspections</h2>
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
                    <Card onClick={this.handleClick(`/PurchaseCategory7/${this.state.id}`)} value="PurchaseCategory7">
                        <Grid item xs={12} container spacing={3}>
                            <Grid item xs={11}>
                                <div style={styles.title}>
                                    <h2>Sale of Buyer's Property</h2>
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
                    <Card onClick={this.handleClick(`/PurchaseCategory8/${this.state.id}`)} value="PurchaseCategory8">
                        <Grid item xs={12} container spacing={3}>
                            <Grid item xs={11}>
                                <div style={styles.title}>
                                    <h2>Real Estate Taxes/Special Assessments</h2>
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
                    <Card onClick={this.handleClick(`/PurchaseCategory9/${this.state.id}`)} value="PurchaseCategory9">
                        <Grid item xs={12} container spacing={3}>
                            <Grid item xs={11}>
                                <div style={styles.title}>
                                    <h2>Additional Provisions</h2>
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
                        <div align="right">
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={this.handleClickSign}>
                                SIGN
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
export default connect(mapReduxStateToProps)(withRouter(PurchaseAgreement));

