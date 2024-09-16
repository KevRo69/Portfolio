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

      const bestunited = "<h3>Best United</h3><a href='https://github.com/Santino-Doucet/BestUnited', target='_blank'><i class='fa-solid fa-link'></i> Lien GitHub  </a><a href='https://drive.google.com/file/d/1me-kWZk8zu9zdjV8xGkJAkMzMXQiqd7E/view?usp=drive_link', target='_blank'><i class='fa-solid fa-video'></i> Vidéo pitch</a><p>Plateforme de vente de sneakers pour encourager le commerce.</p><p>Gestion des stocks pour les commerçants avec scan de code-barre.</p><p><strong>Mon rôle </strong>: Backend : recherche, lecture code-barre et database - Frontend : Soutien</p><p>Projet final Le Wagon - Août 2024</p>"
      const datefaker = "<h3>Date Faker</h3><a href='https://date-faker-00bb72b0c830.herokuapp.com/', target='_blank'><i class='fa-solid fa-link'></i> Lien  </a><a href='https://github.com/Santino-Doucet/Date_Faker', target='_blank'><i class='fa-solid fa-link'></i> Lien GitHub</a><p>Plateforme fictive type marketplace pour louer de faux dates.</p><p>Inscription, location et réservation avec formulaire.</p><p><strong>Mon rôle </strong>: Backend : gestion des réservations, offres et database - Frontend : Soutien</p><p>Projet Le Wagon - Août 2024</p>"
      const portfolio = "<h3>Portfolio (ce site)</h3><a href='#'><i class='fa-solid fa-link'></i> Lien  </a><a href='https://github.com/KevRo69/Portfolio', target='_blank'><i class='fa-solid fa-link'></i> Lien  GitHub</a><p>Mon portfolio sur lequel vous êtes actuellement.</p><p>Informations relatives à tous mes projets, contact au-dessus via mail.</p><p><strong>Mon rôle </strong>: Site complet frontend, backend et design.</p><p>Septembre 2024</p>"

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
