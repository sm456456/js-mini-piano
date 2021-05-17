const NOTE_DETAILS = [
  // it's all capital because it's not gonna change
  { note: "C", key: "Z", frequency: 261.626 },
  { note: "Db", key: "S", frequency: 277.183 },
  { note: "D", key: "X", frequency: 293.665 },
  { note: "Eb", key: "D", frequency: 311.127 },
  { note: "E", key: "C", frequency: 329.628 },
  { note: "F", key: "V", frequency: 349.228 },
  { note: "Gb", key: "G", frequency: 369.994 },
  { note: "G", key: "B", frequency: 391.995 },
  { note: "Ab", key: "H", frequency: 415.305 },
  { note: "A", key: "N", frequency: 440 },
  { note: "Bb", key: "J", frequency: 466.164 },
  { note: "B", key: "M", frequency: 493.883 }
]

/*Steps:
1. add event listeners for every key press
2. extract necessary values from that event; e.code
3. add active class
4. compare keyboard keys with note_details variable
5. select all notes in the dom
6. toggle active value
7. make a function to start a note
8. create audio context
9. create oscilator
10. create gain to control the volume
*/

document.addEventListener("keydown", e => {
  if (e.repeat) return
  const keyCode = e.code
  const noteDetail = getNoteDetails(keyCode)
})

function getNoteDetails(keyboardKey) {
  return NOTE_DETAILS.find(note => `Key${note.key}` === keyboardKey)
}
