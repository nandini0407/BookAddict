import React from 'react';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      rating: 0,
      body: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllReviews(this.props.bookId);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addReview(this.state, this.props.bookId)
      .then(() => this.setState({
        title: "",
        rating: 0,
        body: ""
      }));
  }

  render() {
    let reviewIds = Object.keys(this.props.reviews);
    let reviews = reviewIds.map((id, idx) => {
      return <li key={idx} className="review-list-item">
        <div className="review-username">
          {this.props.reviews[id].user}
        </div>
        <div className="review-title">
          {this.props.reviews[id].title}
        </div>
        <div className="review-rating">
          {this.props.reviews[id].rating}
        </div>
        <div className="review-body">
          {this.props.reviews[id].body}
        </div>
      </li>;
    });

    return (
      <div className="review-component">
        <form onSubmit={ this.handleSubmit } className="review-form">
          <input
            type="text"
            placeholder="Title"
            onChange={ this.update('title') }
            value={ this.state.title }
            className="review-input-title"
            />
          <textarea
            placeholder="Write a review"
            onChange={ this.update('body') }
            value={ this.state.body }
            className="review-input-body"
            />
          <input
            type="submit"
            value="Add Review"
            className="review-submit"
            />
        </form>
        <h3 className="review-text">Reviews</h3>
        <ul className="review-list">
          { reviews }
        </ul>
      </div>
    );
  }
}

export default Reviews;
