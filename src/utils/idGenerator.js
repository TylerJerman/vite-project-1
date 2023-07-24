//Generate a unique ID for the new characters
//This is gonna help me with creating new Characters

function* idGenerator(initialId) {
  let id = initialId ?? 0;
  while (true) {
    yield id;
    id += 1;
  }
}

export default idGenerator;
