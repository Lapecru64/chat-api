const { check } = require("express-validator");
const validateResult = require("../../middlewares/validator.middleware");

const createConversationSingleValidator = [
  check("userId", "El campo userId es requerido")
    .exists()
    .notEmpty()
    .withMessage("El campo userId no debe estar vacío")
    .isInt()
    .withMessage("El campo userId debe ser un número entero positivo"),
  check("participantId", "El campo participantId es requerido")
    .exists()
    .notEmpty()
    .withMessage("El campo participantId no debe estar vacío")
    .isInt()
    .withMessage("El campo participantId debe ser un número entero positivo"),
  validateResult,
];

const createConversationGroupValidator = [
  check("userId", "El campo userId es requerido")
    .exists()
    .notEmpty()
    .withMessage("El campo userId no debe estar vacío")
    .isInt()
    .withMessage("El campo userId debe ser un número entero positivo"),
  check("participantsIds", "El campo participantsIds es requerido")
    .exists()
    .notEmpty()
    .withMessage("El campo participantsIds no debe estar vacío")
    .isArray()
    .withMessage("El campo participantsIds debe ser un arreglo")
    .custom((value) => {
      if (value.length < 2) {
        throw new Error("Deben existir al menos dos participantes");
      }
      return true;
    }),
  check("title", "El campo title es requerido")
    .exists()
    .notEmpty()
    .withMessage("El campo title no debe estar vacío")
    .isString()
    .withMessage("El campo title debe ser una cadena de texto"),
  validateResult,
];

module.exports = {
  createConversationSingleValidator,
  createConversationGroupValidator,
};
