<template>
  <header id="page-topbar">
    <div class="navbar-header">
      <div class="d-flex">
        <!-- LOGO -->
        <div class="navbar-brand-box">
          <a href="index.html" class="logo logo-dark">
            <span class="logo-sm">
              <img src="/images/logo-sm.svg" alt="" height="24">
            </span>
            <span class="logo-lg">
              <img src="/images/logo-sm.svg" alt="" height="24"> <span class="logo-txt">Minia</span>
            </span>
          </a>

          <a href="index.html" class="logo logo-light">
            <span class="logo-sm">
              <img src="/images/logo-sm.svg" alt="" height="24">
            </span>
            <span class="logo-lg">
              <img src="/images/logo-sm.svg" alt="" height="24"> <span class="logo-txt">Minia</span>
            </span>
          </a>
        </div>

        <button type="button" class="btn btn-sm px-3 font-size-16 header-item" id="vertical-menu-btn"
          @click="clickedSidebar()">
          <i class="fa fa-fw fa-bars"></i>
        </button>
      </div>

      <div class="d-flex">
        <div class="dropdown d-inline-block">
          <button type="button" class="btn header-item noti-icon position-relative"
            id="page-header-notifications-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="feather feather-bell icon-lg">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            <span class="badge bg-danger rounded-pill">5</span>
          </button>
          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
            aria-labelledby="page-header-notifications-dropdown">
            <div class="p-3">
              <div class="row align-items-center">
                <div class="col">
                  <h6 class="m-0"> Notifications </h6>
                </div>
                <div class="col-auto">
                  <a href="#!" class="small text-reset text-decoration-underline"> Unread (3)</a>
                </div>
              </div>
            </div>
            <div data-simplebar="init" style="max-height: 230px;">
              <div class="simplebar-wrapper" style="margin: 0px;">
                <div class="simplebar-height-auto-observer-wrapper">
                  <div class="simplebar-height-auto-observer"></div>
                </div>
                <div class="simplebar-mask">
                  <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
                    <div class="simplebar-content-wrapper" style="height: auto; overflow: hidden;">
                      <div class="simplebar-content" style="padding: 0px;">
                        <a href="#!" class="text-reset notification-item">
                          <div class="d-flex">
                            <div class="flex-shrink-0 me-3">
                              <img src="/images/users/avatar-3.jpg" class="rounded-circle avatar-sm" alt="user-pic">
                            </div>
                            <div class="flex-grow-1">
                              <h6 class="mb-1">James Lemire</h6>
                              <div class="font-size-13 text-muted">
                                <p class="mb-1">It will seem like simplified English.</p>
                                <p class="mb-0"><i class="mdi mdi-clock-outline"></i> <span>1 hour ago</span></p>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a href="#!" class="text-reset notification-item">
                          <div class="d-flex">
                            <div class="flex-shrink-0 avatar-sm me-3">
                              <span class="avatar-title bg-primary rounded-circle font-size-16">
                                <i class="bx bx-cart"></i>
                              </span>
                            </div>
                            <div class="flex-grow-1">
                              <h6 class="mb-1">Your order is placed</h6>
                              <div class="font-size-13 text-muted">
                                <p class="mb-1">If several languages coalesce the grammar</p>
                                <p class="mb-0"><i class="mdi mdi-clock-outline"></i> <span>3 min ago</span></p>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a href="#!" class="text-reset notification-item">
                          <div class="d-flex">
                            <div class="flex-shrink-0 avatar-sm me-3">
                              <span class="avatar-title bg-success rounded-circle font-size-16">
                                <i class="bx bx-badge-check"></i>
                              </span>
                            </div>
                            <div class="flex-grow-1">
                              <h6 class="mb-1">Your item is shipped</h6>
                              <div class="font-size-13 text-muted">
                                <p class="mb-1">If several languages coalesce the grammar</p>
                                <p class="mb-0"><i class="mdi mdi-clock-outline"></i> <span>3 min ago</span></p>
                              </div>
                            </div>
                          </div>
                        </a>

                        <a href="#!" class="text-reset notification-item">
                          <div class="d-flex">
                            <div class="flex-shrink-0 me-3">
                              <img src="/images/users/avatar-6.jpg" class="rounded-circle avatar-sm" alt="user-pic">
                            </div>
                            <div class="flex-grow-1">
                              <h6 class="mb-1">Salena Layfield</h6>
                              <div class="font-size-13 text-muted">
                                <p class="mb-1">As a skeptical Cambridge friend of mine occidental.</p>
                                <p class="mb-0"><i class="mdi mdi-clock-outline"></i> <span>1 hour ago</span></p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="simplebar-placeholder" style="width: 0px; height: 0px;"></div>
              </div>
              <div class="simplebar-track simplebar-horizontal" style="visibility: hidden;">
                <div class="simplebar-scrollbar" style="transform: translate3d(0px, 0px, 0px); display: none;"></div>
              </div>
              <div class="simplebar-track simplebar-vertical" style="visibility: hidden;">
                <div class="simplebar-scrollbar" style="transform: translate3d(0px, 0px, 0px); display: none;"></div>
              </div>
            </div>
            <div class="p-2 border-top d-grid">
              <a class="btn btn-sm btn-link font-size-14 text-center" href="javascript:void(0)">
                <i class="mdi mdi-arrow-right-circle me-1"></i> <span>View More..</span>
              </a>
            </div>
          </div>
        </div>

        <div class="dropdown d-inline-block">
          <button type="button" class="btn header-item bg-light-subtle border-start border-end"
            id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img class="rounded-circle header-profile-user" src="/images/users/avatar-1.jpg" alt="Header Avatar">
            <span class="d-none d-xl-inline-block ms-1 fw-medium">Administrator</span>
            <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
          </button>
          <div class="dropdown-menu dropdown-menu-end">
            <!-- item-->
            <a class="dropdown-item" href="apps-contacts-profile.html"><i
                class="mdi mdi mdi-face-man font-size-16 align-middle me-1"></i> Profile</a>
            <a class="dropdown-item" href="auth-lock-screen.html"><i
                class="mdi mdi-lock font-size-16 align-middle me-1"></i> Lock Screen</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="auth-logout.html"><i class="mdi mdi-logout font-size-16 align-middle me-1"></i>
              Logout</a>
          </div>
        </div>

      </div>
    </div>
  </header>
</template>


<script setup lang="ts">
import { onMounted } from 'vue';

function clickedSidebar() {
  document.body.classList.toggle("pace-done");
  document.body.classList.toggle("sidebar-enable");
  if (document.body.getAttribute('data-sidebar-size') == 'lg') {
    document.body.setAttribute("data-sidebar-size", "sm");
  } else {
    document.body.setAttribute('data-sidebar-size', 'lg');
  }
  if (window.innerWidth < 922) {
    document.body.setAttribute('data-sidebar-size', 'lg');
    document.body.classList.remove("pace-done");
  } else {
    document.getElementById('thumbnail')?.classList.toggle('d-none');

  }
}
onMounted(() => {
  document.body.setAttribute('data-sidebar-size', 'lg');

});
</script>