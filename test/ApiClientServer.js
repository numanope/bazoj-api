const { ApiClient } = require('../index.js');

async function main() {
  const apiClient = new ApiClient();
  await apiClient.init();
  apiClient.setup('rest', 'GET', 'https://catfact.ninja/fact');
  const response = await apiClient.query();
  const data = await response.json();
  console.log(data);
}

main();
