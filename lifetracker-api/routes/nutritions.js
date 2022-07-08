const express = require("express")
const router = express.Router()
const { createUserJwt } = require("../utils/tokens")
const security = require("../middleware/security")
const Nutrition = require("../models/nutrition")


//LIST NUTRITIONS
router.get("/", async (req, res, next) => {
    try {
        const nutrition = await Nutrition.listNutritionForUser(req.body)
        return res.status(200).json({ nutrition })
    } catch (err) {
        next(err)
    }
})

//CREATE NUTRITIONS
router.post("/", async (req, res, next) => {
    try {
        const newNutrition = await Nutrition.createNutrition(req.body)
        return res.status(201).json({ newNutrition })
    } catch (err) {
        next(err)
    }
})

//NUTRITION BY ID
router.get("/:nutritionId", async (req, res, next) => {
    try {
        const nutrition = await Nutrition.fetchNutritionById()
        return res.status(200).json({ nutrition })
    } catch(err) {
        next(err)
    }
})

module.exports = router