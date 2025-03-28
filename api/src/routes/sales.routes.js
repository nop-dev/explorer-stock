const { Router } = require("express");
const SalesController = require("../controllers/SalesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const verifyUserAuthorizathion = require("../middlewares/verifyUSerAuthorizathion");

const salesRoutes = Router();

const salesController = new SalesController();

salesRoutes.use(ensureAuthenticated);
salesRoutes.use(verifyUserAuthorizathion(["admin", "sales"]));

salesRoutes.get("/", salesController.index);

module.exports = salesRoutes;