const formatAiBase = (str) => {
  const text = str.split("'''stat");
  const newText = text[0];
  const water = text[2].replace(`'''`, "").trim();
  return {
    newText,
    water,
  };
};
console.log(
  formatAiBase(`
Привет.

'''stat Общая оценка «воды»: '''stat 50% '''`)
);
