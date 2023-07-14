import { dbContext } from "../db/DbContext.js";
import { BadRequest } from "../utils/Errors.js";
class GalaxiesService {

    async getGalaxies() {
        const galaxies = await dbContext.Galaxies.find()

        return galaxies
    }

    async getGalaxyById(galaxyId) {
        const galaxy = await dbContext.Galaxies.findById(galaxyId)

        if (!galaxy) {
            throw new BadRequest('Invalid ID')
        }

        return galaxy
    }
}


export const galaxiesService = new GalaxiesService()