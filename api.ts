import { BACK4APP_APP_ID, BACK4APP_REST_KEY, BACK4APP_API_URL } from "./constants";

export async function apiRequest(endpoint: string, method = "GET", body?: any) {
  const headers: any = {
    "X-Parse-Application-Id": BACK4APP_APP_ID,
    "X-Parse-REST-API-Key": BACK4APP_REST_KEY,
    "Content-Type": "application/json"
  };

  const response = await fetch(BACK4APP_API_URL + endpoint, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || `Request failed with status ${response.status}`);
  }

  return response.json();
}
