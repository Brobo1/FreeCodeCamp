function getAverage(scores) {
  return scores.reduce((a, b) => a + b) / scores.length;
}

function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log("avg", getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log("avg", getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

console.log("range", getGrade(96));
console.log("range", getGrade(82));
console.log("range", getGrade(56));
