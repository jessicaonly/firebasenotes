import React, { Component } from 'react';
import './noteform.css';

class NoteForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      newNoteContent: '',
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.writeNote = this.writeNote.bind(this);
  }
  //When user input changes, set new note content to value of what's in input box
  handleUserInput(e){
    this.setState({
      newNoteContent: e.target.value, //value of the text input
    })
  }

  writeNote(){
    //call a method that sets the noteContent for note to value of the input
    this.props.addNote(this.state.newNoteContent);
    //set newNoteContent back to empty string
    this.setState({
      newNoteContent: '',
    })
  }

  render(){
    return(
      <div className="formWrapper">
        <input className="noteInput"
        placeholder="Write a new note..."
        value={this.state.newNoteContent}
        onChange={this.handleUserInput}
         />
        <button className="noteButton"
        onClick={this.writeNote}>Add Note</button>
      </div>
    )
  }
}

export default NoteForm;