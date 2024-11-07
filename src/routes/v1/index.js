const router = require("express").Router();
const { infoController } = require("../../controllers");
const homeRoutes = require("./home");
const tourRoutes = require("./tour-routes");

router.get("/info", infoController.info);

router.use("/home", homeRoutes);
router.use("/tours", tourRoutes);

module.exports = router;
