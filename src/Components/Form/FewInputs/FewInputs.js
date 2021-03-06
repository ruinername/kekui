import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * FewInputs. Max count equals 4
 */

export default class FewInputs extends Component {

    static propTypes = {
      /** Inputs label */
      label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.element
      ]),
      /** Array of inputs */
      inputs: PropTypes.arrayOf(PropTypes.number).isRequired,
    }

  constructor(props) {
        super(props);
        this.renderInputs = this.renderInputs.bind(this);
    }

  renderInputs(){
     const inputslist = this.props.inputs.map((input, index) =>
        <div className="field" key={index} >{input}</div>
     );
     return(inputslist);
  }

  render() {
    const { label, inputs, ...restProps } = this.props;
    return (
      <div>
        <label>{ label }</label>
        <div { ...restProps } className={ `fields i-${this.props.inputs.length}` }>
          { this.renderInputs() }
        </div>
      </div>
    );
  }

}
