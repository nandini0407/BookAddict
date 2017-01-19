import React from 'react';
import Rating from 'react-rating';
import merge from 'lodash/merge';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import ModalStyle from './modal_style';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      rating: 0,
      body: "",
      showHideForm: "hidden",
      modalOpen: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleReviewForm = this.toggleReviewForm.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllReviews(this.props.bookId);
    // document.addEventListener('click',
    // this.handleClickOutside);
  }

  // componentWillUnmount() {
  //   document.removeEventListener('click',
  //   this.handleClickOutside);
  // }

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
    let review = merge({}, this.state);
    delete review['showHideForm'];
    delete review['modalOpen'];
    this.props.addReview(review, this.props.bookId)
      .then(() => {
        this.setState({
          title: "",
          rating: 0,
          body: ""
        });
        this.closeModal();
      });
  }

  handleClickOutside(event) {
    const domnode = ReactDOM.findDOMNode(this.refs.reviewForm);
    if (!domnode || !domnode.contains(event.target)) {
      this.setState({ showHideForm: "hidden" });
    }
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  toggleReviewForm() {
    let style = (this.state.showHideForm === "hidden") ? "show review-form" : "hidden";
    this.setState({ showHideForm: style });
  }

  render() {
    const fullIconSmall = <img
      className="icon"
      src="http://res.cloudinary.com/dt72mzjpx/image/upload/c_scale,h_40,w_40/v1484724953/full_heart_hqrbof.png"
      width="12"
      height="12"
      />;
    const emptyIconSmall = <img
      className="icon"
      src="http://res.cloudinary.com/dt72mzjpx/image/upload/c_scale,h_40,w_40/v1484724953/empty_heart_rmxig8.png"
      width="12"
      height="12"
      />;
    const fullIconBig = <img
      className="icon"
      src="http://res.cloudinary.com/dt72mzjpx/image/upload/c_scale,h_40,w_40/v1484724953/full_heart_hqrbof.png"
      height="17"
      />;
    const emptyIconBig = <img
      className="icon"
      src="http://res.cloudinary.com/dt72mzjpx/image/upload/c_scale,h_40,w_40/v1484724953/empty_heart_rmxig8.png"
      width="17"
      height="17"
      />;

    let reviewIds = Object.keys(this.props.reviews);
    reviewIds = reviewIds.sort((a, b) => (b - a));
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
        <div className="review-form-div" >
          <h4 className="review-form-text" onClick={ this.openModal } >Review this book</h4>
          <Modal
            isOpen={ this.state.modalOpen }
            onRequestClose={ this.closeModal }
            contentLabel="Modal"
            style={ModalStyle}
            >
            <form onSubmit={ this.handleSubmit } id='reviewForm' ref='reviewForm' className="review-form">
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
          </Modal>
        </div>
        <h3 className="review-text">Reviews</h3>
        <ul className="review-list">
          { reviews }
        </ul>
      </div>
    );
  }
}

export default Reviews;
