import React, { Component } from 'react';
import './Paging.css';

class Paging extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
  }


  render() {

    const { page, onPrev, onNext } = this.props;

    return (
      <form className="Paging" onSubmit={this.handleSubmit}>

        <button
          className="prev"
          onClick={onPrev}
          disabled={page < 2}
        >◀</button>

        <span>Page {page}</span>

        <button
          className="next"
          onClick={onNext}
        >▶</button>

      </form>
    );
  }

}

export default Paging;