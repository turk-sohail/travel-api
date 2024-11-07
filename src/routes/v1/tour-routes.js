const { tourController } = require("../../controllers");

const router = require("express").Router();

router.get("/", tourController.getAll);
router.post("/", tourController.createOne);
router.get("/:id", tourController.getOne);
router.patch("/:id", tourController.updateOne);
router.delete("/:id", tourController.deleteOne);

module.exports = router;
