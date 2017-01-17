import React from 'react';
import Rating from 'react-rating';

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

  updateRate() {
    return (rate) => {
      this.setState({ rating: rate });
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
    const fullIconSmall = <img
      className="icon"
      src="http://res.cloudinary.com/dt72mzjpx/image/upload/v1484622880/full_star_wc2lff.png"
      width="10"
      height="10"
      />;
    const emptyIconSmall = <img
      className="icon"
      src="http://res.cloudinary.com/dt72mzjpx/image/upload/v1484622880/no_star_gukurr.png"
      width="10"
      height="10"
      />;
    const fullIconBig = <img
      className="icon"
      src="http://res.cloudinary.com/dt72mzjpx/image/upload/v1484622880/full_star_wc2lff.png"
      width="17"
      height="17"
      />;
    const emptyIconBig = <img
      className="icon"
      src="http://res.cloudinary.com/dt72mzjpx/image/upload/v1484622880/no_star_gukurr.png"
      width="17"
      height="17"
      />;

    let reviewIds = Object.keys(this.props.reviews);
    let reviews = reviewIds.map((id, idx) => {
      let timestamp = this.props.reviews[id].created_at;
      return <li key={idx} className="review-list-item">
        <div className="review-username">
          {this.props.reviews[id].user}
        </div>
        <div className="review-timestamp">
          { timestamp.slice(0, 10) }
        </div>
        <div className="review-title-rating">
          <div className="review-rating">
            <Rating
              full={ fullIconSmall }
              empty={ emptyIconSmall }
              initialRate={ this.props.reviews[id].rating }
              readonly={ true }
              />
          </div>
          <div className="review-title">
            {this.props.reviews[id].title}
          </div>
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
          <Rating
            full={ fullIconBig }
            empty={ emptyIconBig }
            className="review-rating-form"
            onChange={ this.updateRate()}
            initialRate={ this.state.rating }
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
