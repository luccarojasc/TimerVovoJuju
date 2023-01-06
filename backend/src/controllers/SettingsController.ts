import { Request, Response } from "express"
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepositories";

class SettingsController{
    
    async create(request: Request, response: Response){
        const { username, email, password } = request.body;

        const settingsRepository = getCustomRepository(SettingsRepository);
    
        const settings = settingsRepository.create({
            username,
            email,
            password
        })
    
        await settingsRepository.save(settings);
    
        return response.json(settings);
    }
}

export { SettingsController }