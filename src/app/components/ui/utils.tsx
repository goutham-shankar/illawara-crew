import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// lib/utils.ts

// lib/utils.ts

export function calculateBodyFat(
  gender: string,
  height: number,
  heightUnit: 'in' | 'cm',
  waist: number,
  waistUnit: 'in' | 'cm',
  neck: number,
  neckUnit: 'in' | 'cm'
): number {
  // Input validation
  if (!gender || !height || !waist || !neck) {
    console.log('Missing required inputs:', { gender, height, waist, neck });
    return 0;
  }

  // Convert all measurements to centimeters first
  const heightInCm = heightUnit === 'in' ? height * 2.54 : height;
  const waistInCm = waistUnit === 'in' ? waist * 2.54 : waist;
  const neckInCm = neckUnit === 'in' ? neck * 2.54 : neck;

  // Log converted values
  console.log('Converted measurements:', {
    heightInCm,
    waistInCm,
    neckInCm
  });

  // Calculate body fat percentage using metric formula
  let bodyFat = 0;
  
  if (gender === 'male') {
    bodyFat = (495 / (1.0324 - 0.19077 * Math.log10(waistInCm) + 0.15456 * Math.log10(heightInCm))) - 450;
  } else if (gender === 'female') {
    bodyFat = (495 / (1.29579 - 0.35004 * Math.log10(waistInCm) + 0.22100 * Math.log10(heightInCm))) - 450;
  }

  // Log result before returning
  console.log('Calculated body fat:', bodyFat);

  return isNaN(bodyFat) ? 0 : Math.max(0, Math.min(100, bodyFat));
}


export function calculateBMR(
  gender: string,
  age: number,
  weight: number,
  weightUnit: "kg" | "lbs",
  height: number,
  heightUnit: "in" | "cm"
): number {
  // Convert units to metric if necessary
  if (weightUnit === "lbs") weight /= 2.20462;
  if (heightUnit === "in") height *= 2.54;

  let bmr = 0;

  if (gender === "male") {
    bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
  } else if (gender === "female") {
    bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.330 * age;
  }

  return bmr;
}

export function calculateTDEE(bmr: number, activityLevel: string): number {
  const activityMultipliers: { [key: string]: number } = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    very_active: 1.9,
  };

  return bmr * (activityMultipliers[activityLevel] || 1);
}

export function calculateOneRepMax(weight: number, reps: number): number {
  // Epley formula for 1RM calculation
  return weight * (1 + reps / 30);
}

export function calculateMacros(
  gender: string,
  age: number,
  weight: number,
  height: number,
  activityLevel: string,
  goal: string
): { carbs: number; protein: number; fat: number } {
  // Calculate BMR using the Harris-Benedict equation
  let bmr = 0;

  if (gender === "male") {
    bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
  } else if (gender === "female") {
    bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.330 * age;
  }

  // Calculate TDEE based on activity level
  const activityMultipliers: { [key: string]: number } = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    very_active: 1.9,
  };

  const tdee = bmr * (activityMultipliers[activityLevel] || 1);

  // Adjust TDEE based on goal
  let adjustedTdee = tdee;

  if (goal === "lose") {
    adjustedTdee = tdee - 500; // Reduce 500 kcal/day to lose weight
  } else if (goal === "gain") {
    adjustedTdee = tdee + 500; // Add 500 kcal/day to gain weight
  }

  // Calculate macros based on adjusted TDEE
  const protein = (adjustedTdee * 0.3) / 4; // 30% of calories from protein (4 kcal/g)
  const fat = (adjustedTdee * 0.25) / 9; // 25% of calories from fat (9 kcal/g)
  const carbs = (adjustedTdee * 0.45) / 4; // 45% of calories from carbs (4 kcal/g)

  return { carbs, protein, fat };
}