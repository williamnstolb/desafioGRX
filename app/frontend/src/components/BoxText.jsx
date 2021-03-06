import React, { Component } from 'react';

export default class BoxText extends Component {
  render() {
    const { name, onChange } = this.props;
    return (
      <div class="d-flex justify-content-center">
        <textarea
          id="textArea"
          name={ name }
          onChange={ onChange }
          required={ true }
          rows="5"
          cols="40"
          maxLength={ 200 }
          minLength={ 15 }
          placeholder="Digite aqui..."
          >
        </textarea>
      </div>
    )
  }
}
