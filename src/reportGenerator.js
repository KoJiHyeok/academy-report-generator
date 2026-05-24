function calculatePercentile(rank, totalStudents) {
  const rankNumber = Number(rank);
  const totalNumber = Number(totalStudents);

  if (!rankNumber || !totalNumber) {
    return "-";
  }

  return Math.round((rankNumber / totalNumber) * 100);
}

function calculateLevel(percentile) {
  if (percentile === "-") return "-";

  const value = Number(percentile);

  if (value <= 4) return "1";
  if (value <= 11) return "2";
  if (value <= 23) return "3";
  if (value <= 40) return "4";
  if (value <= 60) return "5";
  if (value <= 77) return "6";
  if (value <= 89) return "7";
  if (value <= 96) return "8";
  return "9";
}

function fillTemplate(template, data) {
  return template.replace(/{{(.*?)}}/g, (_, key) => {
    return data[key.trim()] ?? "";
  });
}

function generateReport(template, student) {
  const percentile = calculatePercentile(student.rank, student.total_students);
  const level = calculateLevel(percentile);

  const data = {
    ...student,
    percentile,
    level,
  };

  return fillTemplate(template, data);
}

function generateReports(template, students) {
  return students
    .map((student) => generateReport(template, student))
    .join("\n\n----------------------------------------\n\n");
}

module.exports = {
  generateReports,
};
