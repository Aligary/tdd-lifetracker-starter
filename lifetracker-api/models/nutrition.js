const bcrypt = require("bcrypt")
const db = require("../db")
const { BCRYPT_WORK_FACTOR } = require("../config")
const { BadRequestError, UnauthorizedError, NotFoundError } = require("../utils/errors")


class Nutrition {

    static async createNutrition(credentials) {
        const requiredFields = ["name", "category", "calories", "image_url", "quantity", "user_id"]
        requiredFields.forEach((e) => {
            if(!credentials.hasOwnProperty(e)) {
                throw new BadRequestError(`Missing ${e} in request body.`)
            }
        })

        //create new user in db with all info
        const result = await db.query(`
            INSERT INTO nutrition (
                name,
                category,
                calories, 
                image_url, 
                quantity,
                user_id
            )
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING id, name, category, calories, image_url, quantity, user_id;
        `, [credentials.name, credentials.category, credentials.calories, credentials.image_url, credentials.quantity, credentials.user_id])
        
        //return user
        const food = result.rows[0]

        return food
    }

    static async fetchNutritionById(id) {
        if (!id) {
            throw new NotFoundError("No id provided")
        }

        const query = `SELECT * FROM nutrition WHERE id = $1`

        const result = await db.query(query, [id])

        const food = result.rows[0]

        return food
    }

    static async listNutritionForUser() {
        const results = await db.query(
            `
                SELECT n.id,
                       n.name,
                       n.category,
                       n.calories,
                       n.image_url,
                       n.quantity
                FROM nutrition AS n
                    JOIN users AS u ON u.id = n.user_id
                ORDER BY n.created_at DESC
            `
        )
        return results.rows
    }

}
module.exports = Nutrition