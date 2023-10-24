const express = require("express");
const router = express.Router();
const {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

// router.get("/", getContacts);
// router.post("/", createContact);
// router.get("/:id", getContact);
// router.put("/:id", updateContact);
// router.delete("/:id", deleteContact);

// shortcut for above
router.use(validateToken);
router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
