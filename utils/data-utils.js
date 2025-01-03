export const replaceMongoIdInArray = (array) =>
  array.map(({ _id, ...rest }) => 
    ({
      id: _id.toString(),
      ...rest,
    }));

export const replaceMongoIdInObject = (obj) =>
  {
    const {_id, ...updatedObj} = {...obj, id: obj._id.toString()};
    return updatedObj;
  }

