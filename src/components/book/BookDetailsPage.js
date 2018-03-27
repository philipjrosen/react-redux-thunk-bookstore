import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import BookDetails from "./BookDetails";

class BookDetailsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <h1>Book Details Page</h1>
        <BookDetails />
      </div>
    );
  }
}

// Map state to props
const mapStateToProps = (state, ownProps) => {
  return {
    book: state.book
  };
};
// Map dispatch to props
const mapDispatchToProps = dispatch => {
  return {
    // This dispatch will trigger
    // the Ajax request we setup
    // in our actions
    fetchBookById: bookId => dispatch(bookActions.fetchBookById(bookId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailsPage);
