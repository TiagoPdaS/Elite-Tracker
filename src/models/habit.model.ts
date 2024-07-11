import { Schema, model } from "mongoose";

const HabitSchema = new Schema(
    {
    name: {
        type: String,
        required: true,
    },
    completedDates: {
        type: [Date],
    }
   },
   {
    timestamps: true,
    versionKey: false,
   },
);

export const habitModel = model('Habit', HabitSchema);