import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="carousel"
export default class extends Controller {
  static targets = ["item"]

  connect() {
    this.activeIndex = 1
    this.updateCarousel()
  }

  previous() {
    this.activeIndex = (this.activeIndex - 1 + this.itemTargets.length) % this.itemTargets.length
    this.updateCarousel()
  }

  next() {
    this.activeIndex = (this.activeIndex + 1) % this.itemTargets.length
    this.updateCarousel()
  }

  updateCarousel() {
    this.itemTargets.forEach((item, index) => {
      item.classList.remove("prev", "active", "next")

      if (index === this.activeIndex) {
        item.classList.add("active")
      } else if (index === (this.activeIndex - 1 + this.itemTargets.length) % this.itemTargets.length) {
        item.classList.add("prev")
      } else if (index === (this.activeIndex + 1) % this.itemTargets.length) {
        item.classList.add("next")
      }
    })
  }
}
