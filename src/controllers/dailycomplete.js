const sequelize = require("../models/index");
const initModel = require("../models/init-models");
const { succesCode, errorCode, failCode } = require("../reponse/reponse");
const models = initModel(sequelize);
const { Op, where } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

const createDailyComplete = async (req, res) => {
  try {
    const { user_id, detail_id } = req.body;

    const daily = await models.UserDailyPlanCompletion.create({
      user_id,
      detail_id,
      completed: 1,
    });

    succesCode(res, daily, "Create Successfully!!!");
  } catch (error) {
    console.error("Error:", error);
    return errorCode(res, "Backend error");
  }
};

module.exports = { createDailyComplete };
