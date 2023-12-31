const {
  getSingleUser,
  createUser,
  login,
  updateBudget,
  deleteExpense,
} = require("../../controllers/userController");
const router = require("express").Router();
const { authMiddleware } = require("../../utils/auth");

router.route("/").post(createUser);
router.route("/login").post(login);
router.route("/:username").get(authMiddleware, getSingleUser).put(authMiddleware,updateBudget)
router.route('/:username/:expensesId').delete(authMiddleware,deleteExpense)
module.exports = router;
