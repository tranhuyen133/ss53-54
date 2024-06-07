function calculateBMI(weight, height) {
  try {
    if (typeof weight !== "number" || typeof height !== "number") {
      throw new Error("dữ liệu không hợp .");
    }

    if (weight <= 0 || height <= 0) {
      throw new Error("dữ liệu không hợp .");
    }

    let bmi = weight / (height * height);
    return bmi;
  } catch (error) {
    return error.message;
  }
}

console.log(calculateBMI(70, 1.75));
console.log(calculateBMI(-70, 1.75));
console.log(calculateBMI("70", 1.75))
