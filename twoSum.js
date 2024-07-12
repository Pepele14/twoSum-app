function twoSum(array, goal) {
  let map = new Map();

  for (let i = 0; i < array.length; i++) {
    const complement = goal - array[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(array[i], i);
  }

  throw new Error("No two sum solution");
}

document.getElementById("findButton").addEventListener("click", () => {
  const arrayInput = document.getElementById("arrayInput").value;
  const targetInput = document.getElementById("targetInput").value;
  const resultDiv = document.getElementById("result");

  try {
    const nums = arrayInput.split(",").map(Number);
    const target = Number(targetInput);

    if (nums.length < 2 || isNaN(target)) {
      throw new Error(
        "Invalid input. Please enter a valid array and target sum."
      );
    }

    const result = twoSum(nums, target);

    resultDiv.textContent = `Indices: [${result[0]}, ${result[1]}]`;
  } catch (error) {
    resultDiv.textContent = error.message;
  }
});
