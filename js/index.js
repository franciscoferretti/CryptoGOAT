const smail = (e) => {
  e.preventDefault()
  const _email = document.getElementById("inputEmail").value

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer)
      toast.addEventListener("mouseleave", Swal.resumeTimer)
    },
    customClass: {
      header: "tituloswal",
      title: "tituloswal",
    },
  })

  Toast.fire({
    icon: "success",
    title: `Enviando mail a ${_email}`,
  }).then(() => {
    Swal.fire({
      title: "Email enviado",
      text: `Hemos enviado el mail a ${_email} `,
      icon: "success",
    })
  })
  document.getElementById("inputNombre").value = ""
  document.getElementById("inputEmail").value = ""
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  spaceBetween: 30,
  centeredSlides: true,
  speed: 3500,
  loop: true,
  on: {
    init: function () {
      anime({
        targets: ".swiper-slide-active .tagline",
        translateY: [200, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: "easeOutQuad",
      })
    },
    slideChangeTransitionStart: function () {
      anime({
        targets: ".swiper-slide-active .tagline",
        translateY: [200, 0],
        opacity: [0, 1],
        duration: 1800,
        easing: "easeOutQuad",
      })
    },
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})

// const juan = new Swiper("#juan", {
//   direction: "horizontal",
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     type: "bullets",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// })

const pepe = new Swiper("#pepe", {
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    // nextEl: ".swiper-button-next",
    // prevEl: ".swiper-button-prev",
  },
})
var nav = document.querySelector("nav")

window.addEventListener("scroll", function () {
  const lista = document.querySelector("#ulNav")
  if (window.pageYOffset > 100) {
    nav.classList.add("chau", "shadow", "hola")
    nav.classList.remove("py-4")
  } else {
    nav.classList.remove("chau", "shadow")
    nav.classList.add("py-4")
  }
})
function contador() {
  var fecha1 = new Date()
  let fecha2 = new Date("2023-06-01 12:15:30")

  // Calcula la diferencia en milisegundos
  var diferenciaEnMilisegundos = fecha2.getTime() - fecha1.getTime()

  var semanas = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24 * 7))
  diferenciaEnMilisegundos -= semanas * (1000 * 60 * 60 * 24 * 7)
  // Calcula la diferencia de días
  var dias = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24))
  diferenciaEnMilisegundos -= dias * (1000 * 60 * 60 * 24)

  // Calcula la diferencia de horas
  var horas = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60))
  diferenciaEnMilisegundos -= horas * (1000 * 60 * 60)

  // Calcula la diferencia de minutos
  var minutos = Math.floor(diferenciaEnMilisegundos / (1000 * 60))
  diferenciaEnMilisegundos -= minutos * (1000 * 60)

  // Calcula la diferencia de segundos
  var segundos = Math.floor(diferenciaEnMilisegundos / 1000)

  // Muestra los resultados
  let tiempo = [semanas, dias, horas, minutos, segundos]

  return tiempo
}

const myCountdown = new countdown({
  target: ".countdown",
  dayWord: " days",
  hourWord: " hours",
  minWord: " mins",
  secWord: " seconds",
})
