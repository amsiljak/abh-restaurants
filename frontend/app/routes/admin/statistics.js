import Route from '@ember/routing/route';
import { inject as service } from "@ember/service";
import { hash } from "rsvp";

export default Route.extend({
  statisticsService: service("statistics-service"),

  model() {
    return hash({
      restaurantsnumber: this.get("statisticsService").findAllRestaurants({}),
      usersnumber: this.get("statisticsService").filter({ size: 1000})
    });
  }
});
