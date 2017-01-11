import React from 'react';

class MyReadStatus extends React.Component {
  constructor(props) {
    super(props);
  }

  render (){
    return (
      <div className="readstatus">
        <h3 className="rs-text">My Read Status</h3>
        <ul className="rs-list">
          <li>Have read</li>
          <li>Reading</li>
          <li>Will read</li>
        </ul>
      </div>
    );
  }
}

export default MyReadStatus;
