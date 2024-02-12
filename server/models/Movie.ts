import mongoose from "mongoose";
import Genre from "../Enums/Genre";
import ListNames from "../Enums/ListNames";

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
    imgTitle: { type: String, required: true },
    imgThumb: { type: String, required: true },
    imgVertical: { type: String, required: true },
    trailerSource: { type: String, required: true },
    movieSource: { type: String, required: true },
    duration: { type: String, required: true },
    year: { type: String, required: true },
    ageLimit: { type: Number, required: true },
    genre: { type: String, enum: Object.values(Genre), required: true },
    isSeries: { type: Boolean, required: true },
    listNames: { type: [String], enum: Object.values(ListNames), required: true }
  });

const Movie = mongoose.model("Movie", movieSchema);
export default Movie;