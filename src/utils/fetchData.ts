export const fetchData = async () => {
  const response = await fetch(
    "https://65fc67a99fc4425c6530088f.mockapi.io/tickets"
  );
  const data = await response.json();
  console.log(data);
  return data;
};
