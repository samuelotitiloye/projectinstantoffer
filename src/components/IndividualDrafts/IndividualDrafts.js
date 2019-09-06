import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

//Material UI
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import swal from 'sweetalert';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
  title: {
    fontSize: '10px',
    margin: '25px 0px 25px 40px',
  },
};

class IndividualDrafts extends Component {
  componentDidMount = () => {
    this.props.dispatch({
      type: 'GET_DRAFTS', payload: this.props.docType
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
          const payload = { docType: this.props.docType, id: draft.id }
          this.props.dispatch(
            { type: 'DELETE_DRAFT', payload: payload }
          )
        } else {
          swal("Your file is safe!");
        }
      });
  }

  handleEdit = (id) => {
    console.log('draft_id', id)
    this.props.history.push(`/listing/${id}`)
  }

  render() {
    return (
      <div>
        {this.props.drafts.map(draft => (
          <div>
            <Card>
              <Grid item xs={12} container spacing={3}>
                <Grid item xs={9}>
                  <div style={styles.title}>
                    <h2>{draft.BUYER_1}'s Listing Contract</h2>
                  </div>
                </Grid>
                <Grid
                  item xs={1}
                  container
                  direction="row"
                  justify="right"
                  alignItems="center"
                >
                  <IconButton onClick={() => { this.handleEdit(draft.id) }}>
                    <EditIcon />
                  </IconButton>
                </Grid>
                <Grid
                  item xs={1}
                  container
                  direction="row"
                  justify="right"
                  alignItems="center"
                >
                  <IconButton onClick={() => { this.handleDelete(draft) }}>
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Card>
            <br />
          </div>
        ))}
      </div>
    )
  }
}

const mapReduxStateToProps = reduxState => reduxState
export default connect(mapReduxStateToProps)(withRouter(IndividualDrafts));
