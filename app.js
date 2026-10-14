const salary1Input = document.getElementById("salary1");
const salary2Input = document.getElementById("salary2");
const singleSavingDisplay = document.getElementById("single-saving");
const sixMonthSavingDisplay = document.getElementById("six-month-saving");

function calculateSavings() {
  const salary1 = parseFloat(salary1Input.value) || 0;
  const salary2 = parseFloat(salary2Input.value) || 0;

  // 30% joint calculation
  const totalSingleSaving = (salary1 * 0.30) + (salary2 * 0.30);

  // 6 months (12 payout cutoffs total)
  const totalSixMonthSaving = totalSingleSaving * 12;

  singleSavingDisplay.textContent = formatCurrency(totalSingleSaving);
  sixMonthSavingDisplay.textContent = formatCurrency(totalSixMonthSaving);
}

function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "PHP",
  }).format(amount);
}

salary1Input.addEventListener("input", calculateSavings);
salary2Input.addEventListener("input", calculateSavings);