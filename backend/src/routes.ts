import { Router } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsController } from "./controllers/SettingsController";
import { SettingsRepository } from "./repositories/SettingsRepositories";

const routes = Router();

const settingsController = new SettingsController();

routes.post("/settings", async (request, response) => {
    const { username, email, password } = request.body;
    const settingsRepository = getCustomRepository(SettingsRepository)
    const settings = settingsRepository.create({
        username,
        email,
        password,
    });

    await settingsRepository.save(settings);

    return response.json(settings);
});

export { routes };
