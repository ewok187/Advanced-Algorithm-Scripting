function updateRecords(id, prop, value) {

  if(!value){
    delete collection[id][prop];
    return collection;
  }

  if (prop !== "tracks") {
    collection[id][prop] = value;
  } else {
    if(!collection[id].hasOwnProperty("tracks")) collection[id].tracks = [];
    collection[id].tracks.push(value);
  }
  return collection;
}
