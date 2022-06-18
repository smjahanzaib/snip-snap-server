import { Request, Response } from "express";
import l, { logger } from "../../../common/logger";
import { manageError } from "../../../helper/response.helper";
import Service from "./category.service";
import { BaseController } from "../_base.controller";

export class Controller extends BaseController {

  async get(req: Request, res: Response): Promise<void> {
    try {
        const user = await Service.get();
        super.response(res, user, 200, "");
    }
    catch (error) {
        logger.error(error);
        const err = manageError(error);
        l.error(`Error in api, err code: ${400}`);
        l.error(err.message);
        super.response(res, '', err.code, err.message);
    }
}
async create(req: Request, res: Response): Promise<void> {
    try {
        const user = await Service.create(req.body);
        super.response(res, user, 200, "Record added Successfully!");
    }
    catch (error) {
        logger.error(error);
        const err = manageError(error);
        l.error(`Error in api, err code: ${400}`);
        l.error(err.message);
        super.response(res, '', err.code, err.message);
    }
}
async getByID(req: Request, res: Response): Promise<void> {
    try {
        const user = await Service.getById(req.params.id);
        super.response(res, user, 200, "");
    }
    catch (error) {
        logger.error(error);
        const err = manageError(error);
        l.error(`Error in api, err code: ${400}`);
        l.error(err.message);
        super.response(res, '', err.code, err.message);
    }
}
async update(req: Request, res: Response): Promise<void> {
    try {
        const user = await Service.update(req.params.id, req.body);
        super.response(res, user, 200, "");
    }
    catch (error) {
        logger.error(error);
        const err = manageError(error);
        l.error(`Error in creating user, err code: ${400}`);
        l.error(err.message);
        super.response(res, '', err.code, err.message);
    }
}
async delete(req: Request, res: Response): Promise<void> {
    try {
        const user = await Service.delete(req.params.id);
        super.response(res, user, 200, "");
    }
    catch (error) {
        logger.error(error);
        const err = manageError(error);
        l.error(`Error in api, err code: ${400}`);
        l.error(err.message);
        super.response(res, '', err.code, err.message);
    }
}
}

export default new Controller();
