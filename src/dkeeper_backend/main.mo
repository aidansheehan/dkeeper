import List "mo:base/List";
import Debug "mo:base/Debug";

actor DKeeper {

  // Declare Note type
  public type Note = {
    title: Text;
    content: Text;
  };

  // Init notes list
  stable var notes: List.List<Note> = List.nil<Note>();

  // Function to create a new note
  public func createNote(titleText: Text, contentText: Text) {

    // Create new note object
    let newNote: Note = {
      title = titleText;
      content = contentText;
    };

    // Create new list with new note added and assign new value to notes
    notes := List.push(newNote, notes);
    Debug.print(debug_show(notes));
    
  };

  //Query function to get user notes
  public query func readNotes(): async [Note] {
    
    //Return notes as array
    return List.toArray(notes);

  };

  //Function to delete a note
  public func removeNote(id: Nat) {

    //Filter list and remove list with id
    let newNotes: List.List<Note> = List.append(List.take(notes, id), List.drop(notes, id + 1));

    //Update notes
    notes := newNotes;

  };

}