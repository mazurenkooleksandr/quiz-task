import { transformData } from "./transformData";
import { getLocalStorageData } from "./localStorage";

export const exportToCsv = () => {
  const data = getLocalStorageData();
  const transformedArrayData = transformData(data);

  const csvContent =
    "data:text/csv;charset=utf-8," +
    "order;title;type;answer\n" +
    transformedArrayData.map((el) => Object.values(el).join(";")).join("\n");

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "quiz_answers.csv");
  document.body.appendChild(link);
  link.click();
};
