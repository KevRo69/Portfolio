import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="carousel"
export default class extends Controller {
  static targets = ["item", "description"]

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

      const bestunited = "<h3>Best United</h3><a href='http://www.bestunited.me', target='_blank'><i class='fa-solid fa-link'></i> Lien (App mobile)  </a><a href='https://www.youtube.com', target='_blank'><i class='fa-solid fa-video'></i> Vidéo pitch</a><p>Plateforme de vente de sneakers pour encourager le commerce local.</p><p>Gestion des stocks pour les commerçants avec scan de code-barre.</p><p>Projet final Le Wagon - Août 2024</p>"
      const datefaker = "<h3>Date Faker</h3><a href='#'><i class='fa-solid fa-link'></i> Lien</a><p>Plateforme fictive type marketplace pour louer de faux dates pour des occasions spéciales.</p><p>Inscription, location et réservation avec formulaire.</p><p>Projet Le Wagon - Août 2024</p>"

      if (index === this.activeIndex) {
        item.classList.add("active")
        this.descriptionTarget.innerHTML = eval(item.id)
      } else if (index === (this.activeIndex - 1 + this.itemTargets.length) % this.itemTargets.length) {
        item.classList.add("prev")
      } else if (index === (this.activeIndex + 1) % this.itemTargets.length) {
        item.classList.add("next")
      }
    })
  }
}
