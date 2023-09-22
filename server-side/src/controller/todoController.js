export const RetrieveTodos = async (req, res, next) => {
  try {
    // const notes = await noteModel.find();
    // res.status(200).json(notes);
  } catch (err) {
    return next(new Error(err.message, { cause: 500 }));
  }
};
