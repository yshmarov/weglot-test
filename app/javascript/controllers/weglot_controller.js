import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="weglot"
export default class extends Controller {
  connect() {
    Weglot.initialize({
      api_key: "wg_3bc7b4c6508a9f1fba78461727d496fb4"
    });
    Weglot.switchTo("en");
    console.log("Weglot initialized");
  }
}
