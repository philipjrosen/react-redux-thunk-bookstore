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

const mapStateToProps = state => {
  return {
    // state mappings here
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // actions mappings here
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailsPage);
