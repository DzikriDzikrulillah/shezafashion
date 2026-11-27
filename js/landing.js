const revealItems = document.querySelectorAll(".reveal");

/* ========================================
   PAGE LOADER
======================================== */

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

/* ========================================
   REVEAL ANIMATION
======================================== */

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 },
);

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index % 6, 5) * 70}ms`;
  revealObserver.observe(item);
});

/* ========================================
   TESTIMONIAL AUTO SLIDE
======================================== */

const testimonialSlider = document.querySelector(".testimonial-slider");
const testimonialTrack = testimonialSlider?.querySelector(".swiper-wrapper");

if (testimonialSlider && testimonialTrack) {
  setInterval(() => {
    const slide = testimonialTrack.querySelector(".testimonial-img");

    if (!slide) return;

    const step = slide.getBoundingClientRect().width + 18;

    const maxScroll =
      testimonialSlider.scrollWidth - testimonialSlider.clientWidth - 8;

    if (testimonialSlider.scrollLeft >= maxScroll) {
      testimonialSlider.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else {
      testimonialSlider.scrollBy({
        left: step,
        behavior: "smooth",
      });
    }
  }, 3600);
}

/* ========================================
   COUNTDOWN
======================================== */

const promoEnd = Date.now() + 9 * 60 * 60 * 1000 + 27 * 60 * 1000 + 18 * 1000;

const setCountdown = () => {
  const distance = Math.max(0, promoEnd - Date.now());

  const hours = Math.floor(distance / (1000 * 60 * 60));

  const minutes = Math.floor((distance / (1000 * 60)) % 60);

  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("hours").textContent = String(hours).padStart(2, "0");

  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0",
  );

  document.getElementById("seconds").textContent = String(seconds).padStart(
    2,
    "0",
  );
};

setCountdown();

setInterval(setCountdown, 1000);
/* ========================================
   PRODUCT SLIDER NAVIGATION
======================================== */

const productGrid = document.querySelector(".product-grid");

const productPrev = document.querySelector(".product-arrow-prev");

const productNext = document.querySelector(".product-arrow-next");

if (productGrid && productPrev && productNext) {
  const scrollAmount = () => {
    return window.innerWidth <= 679 ? window.innerWidth - 32 : 320;
  };

  productNext.addEventListener("click", () => {
    productGrid.scrollBy({
      left: scrollAmount(),
      behavior: "smooth",
    });
  });

  productPrev.addEventListener("click", () => {
    productGrid.scrollBy({
      left: -scrollAmount(),
      behavior: "smooth",
    });
  });
}

/* ========================================
   PRODUCT MODAL
======================================== */

const productModal = document.getElementById("productModal");

const modalTitle = document.getElementById("modalTitle");

const modalPrice = document.getElementById("modalPrice");

const modalSlider = document.getElementById("modalSlider");

const modalDetail = document.getElementById("modalDetail");

const modalSize = document.getElementById("modalSize");

const detailTab = document.getElementById("detailTab");

const sizeTab = document.getElementById("sizeTab");

const detailPanel = document.getElementById("detailPanel");

const sizePanel = document.getElementById("sizePanel");

/* DATA PRODUK */

const products = {
  Mazaya: {
    title: "Gamis Mazaya",
    price: "Rp 150.000",

    images: [
      {
        src: "images/mazayahitam.jpeg",
        color: "Hitam",
      },
      {
        src: "images/mazayabrokenwhite.jpeg",
        color: "Broken White",
      },
      {
        src: "images/Mazayaburgundy.jpeg",
        color: "Burgundy",
      },
      {
        src: "images/mazayamilo.jpeg",
        color: "Milo",
      },
      {
        src: "images/mazayanavy.jpeg",
        color: "Navy",
      },
    ],

    detail: `
      <p>
        hai kaka-kaka cantik, kenakan keanggunan dalam setiap kesempatan dengan
        <strong>MAZAYA DRESS Bordir Gamis Jumbo Dress Lebaran.</strong>
      </p>

      <ul>
        <li>Bahan TWILL GRADE A adem dan nyaman dipakai.</li>
        <li>Detail bordir timbul elegan dan premium.</li>
        <li>Potongan A-line maxi dress yang anggun.</li>
        <li>Lengan panjang dengan kerah daun.</li>
        <li>Cocok formal maupun non formal.</li>
      </ul>
    `,

    size: `
      <table class="size-table">
        <thead>
          <tr>
            <th>Ukuran</th>
            <th>Lingkar Dada</th>
            <th>Panjang Baju</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>L</td>
            <td>110 cm</td>
            <td>138 cm</td>
          </tr>

          <tr>
            <td>XL</td>
            <td>120 cm</td>
            <td>138 cm</td>
          </tr>

          <tr>
            <td>2XL</td>
            <td>130 cm</td>
            <td>138 cm</td>
          </tr>

          <tr>
            <td>3XL</td>
            <td>140 cm</td>
            <td>138 cm</td>
          </tr>
        </tbody>
      </table>
    `,
  },

  Meira: {
    title: "Meira Blouse",
    price: "Rp 80.000",

    images: [
      {
        src: "images/meirared.jpeg",
        color: "Red",
      },
      {
        src: "images/meiragreen.jpeg",
        color: "Green",
      },
      {
        src: "images/meira1.jpeg",
        color: "Navy",
      },
      {
        src: "images/meirablack.jpeg",
        color: "Black",
      },
      {
        src: "images/meiramocca.jpeg",
        color: "Mocca",
      },
    ],

    detail: `
      <p>
        ✨ <strong>Blouse Hijab Stylish</strong> ✨
      </p>

      <p>
        MEIRA BLOUSE OVERSIZE TWILL KEMEJA JUMBO WANITA adalah pilihan tepat
        untuk outfit hijab Anda.
      </p>

      <ul>
        <li>Desain oversized modern dan nyaman.</li>
        <li>Motif bunga elegan dan premium.</li>
        <li>Model longgar cocok dipakai harian.</li>
        <li>Stylish untuk berbagai acara.</li>
      </ul>
    `,

    size: `
      <table class="size-table">
        <thead>
          <tr>
            <th>Ukuran</th>
            <th>Panjang</th>
            <th>Dada</th>
            <th>Torso</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>L</td>
            <td>75</td>
            <td>115</td>
            <td>70</td>
          </tr>

          <tr>
            <td>XL</td>
            <td>80</td>
            <td>120</td>
            <td>75</td>
          </tr>

          <tr>
            <td>XXL</td>
            <td>85</td>
            <td>130</td>
            <td>80</td>
          </tr>

          <tr>
            <td>XXXL</td>
            <td>85</td>
            <td>140</td>
            <td>80</td>
          </tr>
        </tbody>
      </table>
    `,
  },
};

/* OPEN MODAL */

document.querySelectorAll(".quick-view").forEach((button) => {
  button.addEventListener("click", () => {
    const productKey = button.dataset.name;

    const product = products[productKey];

    if (!product) return;

    modalTitle.textContent = product.title;

    modalPrice.textContent = product.price;

    /* SLIDER */

    modalSlider.innerHTML = "";

    product.images.forEach((item) => {
      modalSlider.innerHTML += `
        <div class="modal-slide">
          <img src="${item.src}" alt="${item.color}">
          <div class="modal-color-label">${item.color}</div>
        </div>
      `;
    });

    /* DETAIL */

    modalDetail.innerHTML = product.detail;

    modalSize.innerHTML = product.size;

    /* RESET TAB */

    detailTab.classList.add("active");

    sizeTab.classList.remove("active");

    detailPanel.classList.add("active");

    sizePanel.classList.remove("active");

    /* SHOW MODAL */

    productModal.classList.add("active");

    document.body.style.overflow = "hidden";
  });
});

/* CLOSE MODAL */

document.querySelectorAll("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", () => {
    productModal.classList.remove("active");

    document.body.style.overflow = "";
  });
});

/* ESC CLOSE */

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    productModal.classList.remove("active");

    document.body.style.overflow = "";
  }
});

/* TAB SWITCH */

detailTab.addEventListener("click", () => {
  detailTab.classList.add("active");

  sizeTab.classList.remove("active");

  detailPanel.classList.add("active");

  sizePanel.classList.remove("active");
});

sizeTab.addEventListener("click", () => {
  sizeTab.classList.add("active");

  detailTab.classList.remove("active");

  sizePanel.classList.add("active");

  detailPanel.classList.remove("active");
});

/* SLIDER BUTTON */

document.querySelector(".modal-next").addEventListener("click", () => {
  modalSlider.scrollBy({
    left: 320,
    behavior: "smooth",
  });
});

document.querySelector(".modal-prev").addEventListener("click", () => {
  modalSlider.scrollBy({
    left: -320,
    behavior: "smooth",
  });
});

/* ========================================
   MOBILE MENU
======================================== */

const hamburger = document.getElementById("hamburger");

const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");

  mobileMenu.classList.toggle("active");
});
