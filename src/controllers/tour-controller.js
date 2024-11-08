const { tourService } = require("../services");
const { StatusCodes } = require("http-status-codes");

const getAll = async (req, res) => {
  const queryObject = { ...req.query };
  const excludedFields = ["sort", "page", "limit", "fields"];
  excludedFields.forEach((el) => delete queryObject[el]);

  const queryString = JSON.stringify(req.query);
  console.log(req.query);

  const queryStr = queryString.replace(
    /\b(gte|gt|lte|lt)\b/g,
    (match) => `$${match}`
  );
  const quObject = JSON.parse(queryStr);

  const tours = tourService.getAll(quObject);

  const query = await tours;

  return res.status(StatusCodes.OK).json(query);
};

const createOne = async (req, res) => {
  const tour = await tourService.addTour(req.body);
  res.status(StatusCodes.CREATED).json(tour);
};

const getOne = async (req, res) => {
  const tour = await tourService.getOne(req.params.id);
  return res.status(StatusCodes.OK).json(tour);
};

const updateOne = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const tour = await tourService.updateOne(id, data);
  return res.status(StatusCodes.OK).json(tour);
};

const deleteOne = async (req, res) => {
  const id = req.params.id;
  await tourService.deleteOne(id);
  return res.status(StatusCodes.OK).json({});
};

module.exports = {
  getAll,
  createOne,
  getOne,
  deleteOne,
  updateOne,
};
