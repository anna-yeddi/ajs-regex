import fetchData from "./http";

export default function getLevel(userId) {
  const response = fetchData(`https://server/user/${userId}`);

  // TODO: логика обработки
  if (response.status === "ok") {
    return `Your current level is: ${response.level}`;
  }

  return `The level information is currently unavailable`;
}
