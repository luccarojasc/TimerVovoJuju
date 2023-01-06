import { Router } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "./src/repositories/SettingsRepositories";

const routes = Router();

routes.post("/settings", (request, response) => {
    const settingsRepository = getCustomRepository(SettingsRepository)
})

export { routes };