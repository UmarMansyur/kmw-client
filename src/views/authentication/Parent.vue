<template>
  <div class="auth-page-wrapper d-flex justify-content-center align-items-center min-vh-100"
    style="background: linear-gradient(109.6deg, rgba(0, 0, 0, 0.93) 11.2%, rgb(63, 61, 61) 78.9%);">
    <div class="auth-page-content overflow-hidden pt-lg-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="row g-0 bg-white">
              <div class="col-lg-6 bg-dark">
                <div class="p-lg-5 p-4 auth-one-bg h-100">
                  <div class="position-relative h-100 d-flex flex-column">
                    <div class="mb-4"><a href="index.html" class="d-block"><img src="/images/kmw.png" alt=""
                          height="70"></a></div>
                    <div class="mt-auto">
                      <div class="mb-3"><i class="ri-double-quotes-l display-4 text-success"></i></div>
                      <div id="qoutescarouselIndicators" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators"><button type="button" data-bs-target="#qoutescarouselIndicators"
                            data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                          <button type="button" data-bs-target="#qoutescarouselIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2">
                          </button>
                          <button type="button" data-bs-target="#qoutescarouselIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3">
                          </button>
                        </div>
                        <div class="carousel-inner text-center text-white-50 pb-5">
                          <div class="carousel-item active">
                            <p class="fs-15 fst-italic"> "Setiap rupiah yang kau sisihkan adalah langkah menuju kaki-kaki
                              suci di tanah haram. Mulailah menabung dengan keyakinan, niscaya pintu rezeki akan terbuka"
                            </p>
                          </div>
                          <div class="carousel-item">
                            <p class="fs-15 fst-italic">"Jangan biarkan harta menguasai dirimu, kendalikanlah harta untuk
                              mewujudkan impianmu beribadah di Baitullah. Menabung adalah tanda kesungguhanmu mencapai
                              tujuan tersebut."</p>
                          </div>
                          <div class="carousel-item">
                            <p class="fs-15 fst-italic">"Ketika kamu menabung dengan penuh niat untuk haji dan umroh,
                              hatimu juga ikut menyuci dari dosa-dosa. Sekecil apapun uang yang kau sisihkan, itu adalah
                              investasi untuk akhiratmu."</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="p-lg-5 p-4">
                  <div>
                    <h5 class="text-info">Selamat datang kembali !</h5>
                    <p class="text-muted"> Silahkan login untuk masuk ke aplikasi. </p>
                  </div>
                  <div class="mt-4">
                    <slot></slot>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>