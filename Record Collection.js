function updateRecords(id, prop, value) {

  if(!value){  // if there is no value input
    delete collection[id][prop]; // delete the prop of thaz collection part
    return collection;
  }

  if (prop !== "tracks") {  // if the input prop is not tracks
    collection[id][prop] = value; // give that prop the input value
  } else {
    if(!collection[id].hasOwnProperty("tracks")) collection[id].tracks = []; // else if that collection part has no tracks property create it as empty array
    collection[id].tracks.push(value); // and push the input value into tracks
  }
  return collection;
}
