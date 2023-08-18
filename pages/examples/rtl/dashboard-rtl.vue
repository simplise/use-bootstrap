<script setup lang="ts">
definePageMeta({
  layout: 'examples',
  title: ``,
  description: ``
})
</script>

<template>
  <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow mt-5">
    <b-a
      class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6"
      href="#"
    >
      اسم الشركة
    </b-a>
    <b-button
      class="navbar-toggler position-absolute d-md-none collapsed"
      type="button"
      toggle="collapse"
      data-bs-target="#sidebarMenu"
      aria-controls="sidebarMenu"
      aria-expanded="false"
      aria-label="عرض/إخفاء لوحة التنقل"
    >
      <b-span class="navbar-toggler-icon" />
    </b-button>
    <BFormInput
      class="form-control form-control-dark w-100 rounded-0 border-0"
      type="text"
      placeholder="بحث"
      aria-label="بحث"
    />
    <b-div class="navbar-nav">
      <b-div class="nav-item text-nowrap">
        <b-a
          class="nav-link px-3"
          href="#"
        >
          تسجيل الخروج
        </b-a>
      </b-div>
    </b-div>
  </header>

  <b-div class="container-fluid">
    <b-div class="row">
      <Nav
        id="sidebarMenu"
        class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
      >
        <b-div class="position-sticky pt-3">
          <ul class="nav flex-column">
            <li class="nav-item">
              <b-a
                class="nav-link active"
                aria-current="page"
                href="#"
              >
                <b-span
                  data-feather="home"
                  class="align-text-bottom"
                />
                لوحة القيادة
              </b-a>
            </li>
            <li class="nav-item">
              <b-a
                class="nav-link"
                href="#"
              >
                <b-span
                  data-feather="file"
                  class="align-text-bottom"
                />
                الطلبات
              </b-a>
            </li>
            <li class="nav-item">
              <b-a
                class="nav-link"
                href="#"
              >
                <b-span
                  data-feather="shopping-cart"
                  class="align-text-bottom"
                />
                المنتجات
              </b-a>
            </li>
            <li class="nav-item">
              <b-a
                class="nav-link"
                href="#"
              >
                <b-span
                  data-feather="users"
                  class="align-text-bottom"
                />
                الزبائن
              </b-a>
            </li>
            <li class="nav-item">
              <b-a
                class="nav-link"
                href="#"
              >
                <b-span
                  data-feather="bar-chart-2"
                  class="align-text-bottom"
                />
                التقارير
              </b-a>
            </li>
            <li class="nav-item">
              <b-a
                class="nav-link"
                href="#"
              >
                <b-span
                  data-feather="layers"
                  class="align-text-bottom"
                />
                التكاملات
              </b-a>
            </li>
          </ul>

          <b-h
            level="6"
            class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase"
          >
            <b-span>التقارير المحفوظة</b-span>
            <b-a
              class="link-secondary"
              href="#"
              aria-label="إضافة تقرير جديد"
            >
              <b-span
                data-feather="plus-circle"
                class="align-text-bottom"
              />
            </b-a>
          </b-h>
          <ul class="nav flex-column mb-2">
            <li class="nav-item">
              <b-a
                class="nav-link"
                href="#"
              >
                <b-span
                  data-feather="file-text"
                  class="align-text-bottom"
                />
                الشهر الحالي
              </b-a>
            </li>
            <li class="nav-item">
              <b-a
                class="nav-link"
                href="#"
              >
                <b-span
                  data-feather="file-text"
                  class="align-text-bottom"
                />
                الربع الأخير
              </b-a>
            </li>
            <li class="nav-item">
              <b-a
                class="nav-link"
                href="#"
              >
                <b-span
                  data-feather="file-text"
                  class="align-text-bottom"
                />
                التفاعل الإجتماعي
              </b-a>
            </li>
            <li class="nav-item">
              <b-a
                class="nav-link"
                href="#"
              >
                <b-span
                  data-feather="file-text"
                  class="align-text-bottom"
                />
                مبيعات نهاية العام
              </b-a>
            </li>
          </ul>
        </b-div>
      </Nav>

      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <b-div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <b-h
            level="1"
            class="h2"
          >
            لوحة القيادة
          </b-h>
          <b-div class="btn-toolbar mb-2 mb-md-0">
            <b-div class="btn-group me-2">
              <b-button
                type="button"
                class="btn btn-sm btn-outline-secondary"
              >
                مشاركة
              </b-button>
              <b-button
                type="button"
                class="btn btn-sm btn-outline-secondary"
              >
                تصدير
              </b-button>
            </b-div>
            <b-button
              type="button"
              class="btn btn-sm btn-outline-secondary dropdown-toggle"
            >
              <b-span
                data-feather="calendar"
                class="align-text-bottom"
              />
              هذا الأسبوع
            </b-button>
          </b-div>
        </b-div>

        <canvas
          id="myChart"
          class="my-4 w-100"
          width="900"
          height="380"
        />

        <b-h level="2">
          عنوان القسم
        </b-h>
        <b-div class="table-responsive">
          <b-table class="table table-striped table-sm">
            <b-thead>
              <b-tr>
                <b-th scope="col">
                  #
                </b-th>
                <b-th scope="col">
                  عنوان
                </b-th>
                <b-th scope="col">
                  عنوان
                </b-th>
                <b-th scope="col">
                  عنوان
                </b-th>
                <b-th scope="col">
                  عنوان
                </b-th>
              </b-tr>
            </b-thead>
            <b-tbody>
              <b-tr>
                <b-td>1,001</b-td>
                <b-td>بيانات</b-td>
                <b-td>عشوائية</b-td>
                <b-td>تثري</b-td>
                <b-td>الجدول</b-td>
              </b-tr>
              <b-tr>
                <b-td>1,002</b-td>
                <b-td>تثري</b-td>
                <b-td>مبهة</b-td>
                <b-td>تصميم</b-td>
                <b-td>تنسيق</b-td>
              </b-tr>
              <b-tr>
                <b-td>1,003</b-td>
                <b-td>عشوائية</b-td>
                <b-td>غنية</b-td>
                <b-td>قيمة</b-td>
                <b-td>مفيدة</b-td>
              </b-tr>
              <b-tr>
                <b-td>1,003</b-td>
                <b-td>معلومات</b-td>
                <b-td>تثري</b-td>
                <b-td>توضيحية</b-td>
                <b-td>عشوائية</b-td>
              </b-tr>
              <b-tr>
                <b-td>1,004</b-td>
                <b-td>الجدول</b-td>
                <b-td>بيانات</b-td>
                <b-td>تنسيق</b-td>
                <b-td>قيمة</b-td>
              </b-tr>
              <b-tr>
                <b-td>1,005</b-td>
                <b-td>قيمة</b-td>
                <b-td>مبهة</b-td>
                <b-td>الجدول</b-td>
                <b-td>تثري</b-td>
              </b-tr>
              <b-tr>
                <b-td>1,006</b-td>
                <b-td>قيمة</b-td>
                <b-td>توضيحية</b-td>
                <b-td>غنية</b-td>
                <b-td>عشوائية</b-td>
              </b-tr>
              <b-tr>
                <b-td>1,007</b-td>
                <b-td>تثري</b-td>
                <b-td>مفيدة</b-td>
                <b-td>معلومات</b-td>
                <b-td>مبهة</b-td>
              </b-tr>
              <b-tr>
                <b-td>1,008</b-td>
                <b-td>بيانات</b-td>
                <b-td>عشوائية</b-td>
                <b-td>تثري</b-td>
                <b-td>الجدول</b-td>
              </b-tr>
              <b-tr>
                <b-td>1,009</b-td>
                <b-td>تثري</b-td>
                <b-td>مبهة</b-td>
                <b-td>تصميم</b-td>
                <b-td>تنسيق</b-td>
              </b-tr>
              <b-tr>
                <b-td>1,010</b-td>
                <b-td>عشوائية</b-td>
                <b-td>غنية</b-td>
                <b-td>قيمة</b-td>
                <b-td>مفيدة</b-td>
              </b-tr>
              <b-tr>
                <b-td>1,011</b-td>
                <b-td>معلومات</b-td>
                <b-td>تثري</b-td>
                <b-td>توضيحية</b-td>
                <b-td>عشوائية</b-td>
              </b-tr>
              <b-tr>
                <b-td>1,012</b-td>
                <b-td>الجدول</b-td>
                <b-td>تثري</b-td>
                <b-td>تنسيق</b-td>
                <b-td>قيمة</b-td>
              </b-tr>
              <b-tr>
                <b-td>1,013</b-td>
                <b-td>قيمة</b-td>
                <b-td>مبهة</b-td>
                <b-td>الجدول</b-td>
                <b-td>تصميم</b-td>
              </b-tr>
              <b-tr>
                <b-td>1,014</b-td>
                <b-td>قيمة</b-td>
                <b-td>توضيحية</b-td>
                <b-td>غنية</b-td>
                <b-td>عشوائية</b-td>
              </b-tr>
              <b-tr>
                <b-td>1,015</b-td>
                <b-td>بيانات</b-td>
                <b-td>مفيدة</b-td>
                <b-td>معلومات</b-td>
                <b-td>الجدول</b-td>
              </b-tr>
            </b-tbody>
          </b-table>
        </b-div>
      </main>
    </b-div>
  </b-div>
</template>
 <!-- <script>
  import './dashboard.css'
  import './dashboard.rtl.css'
 </script>
 
 <style scoped>
 .theme-default-content:not(.custom){
  max-width: none;
 }
 </style> -->