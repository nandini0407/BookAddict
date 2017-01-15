import React from 'react';
import { Link } from 'react-router';

class MyReadStatus extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllReadStatuses();
  }

  render (){
    let readStatuses = this.props.readStatuses.map((status) => {
      return <li key={ status.id }>
        <Link to={`user/readstatus/${status.id}`} >{ status.name }</Link>
      </li>;
    });
    return (
      <div className="readstatus">
        <h3 className="rs-text">My Read Status</h3>
        <ul className="rs-list">
          { readStatuses }
        </ul>
      </div>
    );
  }
}

export default MyReadStatus;
