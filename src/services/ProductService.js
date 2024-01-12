const realmName = import.meta.env.VITE_REALM;
const userToken = import.meta.env.VITE_USER_TOKEN;
const endPoint = import.meta.env.VITE_ENDPOINT;
const tableID = import.meta.env.VITE_TABLE_ID;

const headers = {
  'QB-Realm-Hostname': realmName,
  'User-Agent': '{User-Agent}',
  Authorization: `QB-USER-TOKEN ${userToken}`,
  'Content-Type': 'application/json',
};

const boardData = {
  from: tableID,
  select: [3, 6, 7, 8, 9, 10, 11, 12, 14], // 9 ratings
};

async function fetchBoards() {
  try {
    const response = await fetch(endPoint, {
      method: 'POST',
      headers,
      body: JSON.stringify(boardData),
    });
    if (!response.ok) throw new Error('Network error');
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export default fetchBoards;
