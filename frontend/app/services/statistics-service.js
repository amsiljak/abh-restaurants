import BaseService from "./base-service";

export default BaseService.extend({
  findAllRestaurants(request) {
    return this.get("/api/v1/restaurant", request);
  },
  filter(params) {
    return this.get(`/api/v1/users`, params);
  }
});
