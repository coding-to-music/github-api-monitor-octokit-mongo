import http from "./httpService";

export function getPulls() {
  return http.get("http://localhost:3000/api/pull-requests");
}
