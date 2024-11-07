const { tourService } = require("../services");
const { StatusCodes } = require("http-status-codes");

const getAll = async (req, res) => {
  const tours = await tourService.getAll();
  return res.status(StatusCodes.OK).json(tours);
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
