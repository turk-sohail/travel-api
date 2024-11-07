const { Tour } = require("../models");

const getAll = async () => {
  try {
    const tours = await Tour.find();
    return tours;
  } catch (error) {
    throw error;
  }
};

const addTour = async (data) => {
  try {
    const tour = await Tour.create(data);
    return tour;
  } catch (error) {
    throw error;
  }
};

const getOne = async (data) => {
  try {
    const tour = await Tour.findById(data);
    return tour;
  } catch (error) {
    throw error;
  }
};

const updateOne = async (id, data) => {
  try {
    const tour = await Tour.findByIdAndUpdate(id, data);
    return tour;
  } catch (error) {
    throw error;
  }
};

const deleteOne = async (id) => {
  try {
    return await Tour.findByIdAndDelete(id);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAll,
  addTour,
  getOne,
  updateOne,
  deleteOne,
};
