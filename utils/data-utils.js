// Optimize the MongoDB ID transformation functions
export const replaceMongoIdInArray = (array) =>
  Array.isArray(array) ? array.map(replaceMongoIdInObject) : [];

export const replaceMongoIdInObject = (doc) =>
  doc?._id ? { id: doc._id.toString(), ...doc } : null;

