// The One-Line Laugh — one original line on everyday life, written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// Meal prep collapses by Tuesday; the sink-cereal raccoon is all of us.
const JOKE =
  "I meal-prepped for the whole week, but by Tuesday I was eating cereal over the sink like a raccoon with a mortgage.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
