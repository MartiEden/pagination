import React from 'react';


const Buttons = (props) => {
    return (<section className="buttons mt-4 mb-4">
  
      {props.currentPage !== 1 ? <button className="btn btn-primary mr-4" onClick={props.onPrev}>Prev Page</button> : false}
      <button className="btn btn-primary" onClick={props.onNext}>Next Page</button>
    </section>);
  }
  
export default Buttons;  