const url = "http://localhost:3000";
export async function fetchAvailablePlaces() {
  const response = await fetch(url + "/places");
  const resData = await response.json();
  if (!response.ok) {
    throw new Error(
      "Fetching Data Failed... Initializing Self-Destruct Sequance in 10"
    );
  }

  return resData.places;
}

export async function updateUserPlaces(places) {
  const response = await fetch(url + "/user-places", {
    method: "PUT",
    body: JSON.stringify({ places: places }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to update user data.");
  }
  return resData.message;
}

export async function fetchUserPlaces() {
  const response = await fetch(url + "/user-places");
  const resData = await response.json();
  if (!response.ok) {
    throw new Error(
      "Fetching Data Failed... Initializing Self-Destruct Sequance in 10"
    );
  }

  return resData.places;
}
