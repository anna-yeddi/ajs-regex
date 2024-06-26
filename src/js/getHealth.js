export default function getHealth(userData) {
  if (userData.health >= 50) {
    return 'healthy';
  } else if (userData.health >= 15) {
    return 'wounded';
  } else {
    return 'critical';
  }
}