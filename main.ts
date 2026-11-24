// Alien Field Notes: The Two Day Earth Review — one alien tourist's review of Earth, 200 characters max.
// Subject: an alien tourist rates Earth — five stars for the sunsets, docked for the locals charging rent to sleep on their own planet.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Gave Earth five stars for the sunsets, then docked four when the locals charged me rent to sleep on their own planet. Lovely views. Terrible landlords. Would orbit again.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
