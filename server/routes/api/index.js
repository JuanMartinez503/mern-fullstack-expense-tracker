const userRoutes = require("./userRoutes");
const budgetRoutes = require("./budgetRoutes");
const expensesRoutes = require("./budgetRoutes");
const router = require("express").Router();
router.use("/user", userRoutes);
router.use("/budget", budgetRoutes);
router.use("/expenses", expensesRoutes);

module.exports = router;