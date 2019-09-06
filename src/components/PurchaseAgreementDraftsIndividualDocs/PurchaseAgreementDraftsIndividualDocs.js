import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

//Material UI
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import swal from 'sweetalert';

const styles = {
    title: {
        margin: '25px 0px 25px 40px',
    },
};

class PurchaseAgreementDraftsIndividualDocs extends Component {
    componentDidMount = () => {
        this.props.dispatch({
            type: 'FETCH_PURCHASE_DRAFTS'
        });
    }

    handleDelete = (draft) => {
        swal({
            title: "Confirm Delete",
            text: "Once deleted, you will not be able to recover this file.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Your file has been deleted!", {
                        icon: "success",
                    });
                    this.props.dispatch({ type: 'DELETE_PURCHASE_ANSWER', payload: draft })
                } else {
                    swal("Your file is safe!");
                }
            });
    }

    handleEdit = (draft) => {
        this.props.history.push(`/listing/${draft.id}`)
    }

    render() {
        return (
            <div>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                {this.props.purchaseDrafts.map(draft => (
                    <div>
                        <CardActionArea>
                            <Card>
                                <Grid item xs={12} container spacing={3}>
                                    <Grid item xs={10}>
                                        <div style={styles.title}>
                                            <h2>{draft.BUYER_1}'s Listing Contract</h2>
                                            <h2>{draft.date}</h2>
                                        </div>
                                    </Grid>
                                    <Grid
                                        item xs={1}
                                        className="arrow"
                                        container
                                        direction="row"
                                        justify="center"
                                        alignItems="center"
                                        onClick={() => { this.handleEdit(draft) }}>
                                        <i class="material-icons">edit</i>
                                    </Grid>
                                    <Grid
                                        item xs={1}
                                        className="arrow"
                                        container
                                        direction="row"
                                        justify="center"
                                        alignItems="center"
                                        onClick={() => { this.handleDelete(draft) }}>
                                        <i class="material-icons">delete</i>
                                    </Grid>
                                </Grid>
                            </Card>
                        </CardActionArea>
                        <br />
                    </div>
                ))}
            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => reduxState
export default connect(mapReduxStateToProps)(withRouter(PurchaseAgreementDraftsIndividualDocs));
