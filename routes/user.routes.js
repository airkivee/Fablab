const { Router } = require("express");
const auth = require("../middleware/auth.middleware");
const User = require("../models/User");
const router = Router();

// /api/user/all
router.get("/all", auth, (req, res) => {
  User.findAll()
    .then(userall => {
      res.json(userall);
    })
    .catch(e => {
      res.status(500).json({ message: `Что-то пошло не так, попробуйте снова   ${e}` });
    });
});
// /api/user/showid/:id
router.get("/showid/:id", auth, async (req, res) => {

  try {
    const userId = req.params.id;

    const process = await User.findOne({ where: { id: userId }, },);
 
    res.json(process);
  } catch (e) {
    res
      .status(500)
      .json({ message: `Что-то пошло не так, попробуйте снова   ${e}` });
  }
});
// /api/user/delete/:id
router.delete("/delete/:id", auth, async (req, res) => {
  try {
    const userId = req.params.id;

    // Corrected syntax for findOne
    const user = await User.findOne({ where: { id: userId } });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Use the destroy method to delete the user
    await user.destroy();

    res.json({ message: "User deleted successfully" });
  } catch (e) {
    console.error(e); // Log the error for debugging purposes

    res.status(500).json({ message: `Что-то пошло не так, попробуйте снова   ${e.message || e}` });
  }
});

module.exports = router;
