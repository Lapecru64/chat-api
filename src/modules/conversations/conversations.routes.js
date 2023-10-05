const { Router } = require("express");
const {
  createConversation,
  createGroupConversation,
  getAllConversations,
} = require("./conversations.controllers");
const authenticate = require("../../middlewares/auth.middleware");
const {
  createConversationSingleValidator,
  createConversationGroupValidator,
} = require("./conversations.validation"); // Importa las funciones de validación

const router = Router();

// Ruta para crear una conversación individual
router.post("/", authenticate, createConversationSingleValidator, createConversation);

// Ruta para crear una conversación grupal
router.post("/group", authenticate, createConversationGroupValidator, createGroupConversation);

// Ruta para obtener todas las conversaciones de un usuario
router.get("/:id", authenticate, getAllConversations);

module.exports = router;
