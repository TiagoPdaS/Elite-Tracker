import { type Request, type Response } from "express";
import { habitModel } from "../models/habit.model";

export class HabitsController {
    store = async (req: Request, res: Response) : Promise<Response> => {
        const { name } = req.body;
        
        const newHabit = await habitModel.create({
            name,
            completedDates: [],
        });
            
            return res.status(201).json(newHabit);
        };
    }
