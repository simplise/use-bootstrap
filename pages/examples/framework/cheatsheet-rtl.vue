<script setup lang="ts">
definePageMeta({
  layout: 'examples',
  title: ``,
  description: ``
})
</script>

<template>
  <div>
    <p><br></p>
    <header class="mt-5 bd-header bg-dark py-3 d-flex align-items-stretch border-bottom border-dark">
      <b-div class="container-fluid d-flex align-items-center">
        <b-h
          level="1"
          class="d-flex align-items-center fs-4 text-white mb-0"
        >
          <img
            width="38"
            height="30"
            class="me-3"
            alt="Bootstrap"
            src="https://dummyimage.com/38x30/000000/fff"
          >
          <!-- <b-img src="/docs//assets/brand/bootstrap-logo-white.svg" width="38" height="30" class="me-3" alt="Bootstrap"> -->
          ورقة الغش
        </b-h>
        <b-a
          href=""
          class="ms-auto link-light"
          hreflang="en"
        >
          جدول بيانات LTR
        </b-a>
        <!-- <b-a href="" class="ms-auto link-light" hreflang="en">جدول بيانات LTR</b-a> -->
      </b-div>
    </header>
  </div>
  <aside class="bd-aside sticky-xl-top text-muted align-self-start mb-3 mb-xl-5 px-2">
    <b-h
      level="2"
      class="h6 pt-4 pb-3 mb-4 border-bottom"
    >
      على هذه الصفحة
    </b-h>
    <Nav
      id="toc"
      class="small"
    >
      <ul class="list-unstyled">
        <li class="my-2">
          <b-button
            class="btn d-inline-flex align-items-center collapsed border-0"
            toggle="collapse"
            aria-expanded="false"
            data-bs-target="#contents-collapse"
            aria-controls="contents-collapse"
          >
            المحتوى
          </b-button>
          <ul
            id="contents-collapse"
            class="list-unstyled ps-3 collapse"
          >
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#typography"
              >
                النصوص
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#images"
              >
                الصور
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#tables"
              >
                الجداول
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#figures"
              >
                النماذج البيانية
              </b-a>
            </li>
          </ul>
        </li>
        <li class="my-2">
          <b-button
            class="btn d-inline-flex align-items-center collapsed border-0"
            toggle="collapse"
            aria-expanded="false"
            data-bs-target="#forms-collapse"
            aria-controls="forms-collapse"
          >
            النماذج
          </b-button>
          <ul
            id="forms-collapse"
            class="list-unstyled ps-3 collapse"
          >
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#overview"
              >
                نظرة عامة
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#disabled-forms"
              >
                الحقول المعطلة
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#sizing"
              >
                الأحجام
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#input-group"
              >
                مجموعة الإدخال
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#floating-labels"
              >
                الحقول ذوي العناوين العائمة
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#validation"
              >
                التحقق
              </b-a>
            </li>
          </ul>
        </li>
        <li class="my-2">
          <b-button
            class="btn d-inline-flex align-items-center collapsed border-0"
            toggle="collapse"
            aria-expanded="false"
            data-bs-target="#components-collapse"
            aria-controls="components-collapse"
          >
            مكونات
          </b-button>
          <ul
            id="components-collapse"
            class="list-unstyled ps-3 collapse"
          >
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#accordion"
              >
                المطوية
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#alerts"
              >
                الإنذارات
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#badge"
              >
                الشارة
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#breadcrumb"
              >
                مسار التنقل التفصيلي
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#buttons"
              >
                الأزرار
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#button-group"
              >
                مجموعة الأزرار
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#card"
              >
                البطاقة
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#carousel"
              >
                شرائح العرض
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#dropdowns"
              >
                القوائم المنسدلة
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#list-group"
              >
                مجموعة العناصر
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#modal"
              >
                الصندوق العائم
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#navs"
              >
                التنقل
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#navbar"
              >
                شريط التنقل
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#pagination"
              >
                ترقيم الصفحات
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#popovers"
              >
                الصناديق المنبثقة
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#progress"
              >
                شريط التقدم
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#scrollspy"
              >
                المخطوطة
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#spinners"
              >
                الدوائر المتحركة
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#toasts"
              >
                الإشعارات
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#tooltips"
              >
                التلميحات
              </b-a>
            </li>
          </ul>
        </li>
      </ul>
    </Nav>
  </aside>
  <b-div class="bd-cheatsheet container-fluid bg-body">
    <section id="content">
      <b-h
        level="2"
        class="sticky-xl-top fw-bold pt-3 pt-xl-5 pb-2 pb-xl-3"
      >
        المحتوى
      </b-h>

      <article
        id="typography"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            النصوص
          </b-h>
          <b-a
            class="d-flex align-items-center"
            hreflang="en"
            href=""
          >
            دليل الإستخدام
          </b-a>
        </b-div>

        <b-div>
          <b-p class="display-1">
            العرض 1
          </b-p>
          <b-p class="display-2">
            العرض 2
          </b-p>
          <b-p class="display-3">
            العرض 3
          </b-p>
          <b-p class="display-4">
            العرض 4
          </b-p>
          <b-p class="display-5">
            العرض 5
          </b-p>
          <b-p class="display-6">
            العرض 6
          </b-p>



          <b-p class="h1">
            عنوان 1
          </b-p>
          <b-p class="h2">
            عنوان 2
          </b-p>
          <b-p class="h3">
            عنوان 3
          </b-p>
          <b-p class="h4">
            عنوان 4
          </b-p>
          <b-p class="h5">
            عنوان 5
          </b-p>
          <b-p class="h6">
            عنوان 6
          </b-p>



          <b-p class="lead">
            هذه قطعة إملائية متميزة، فهي مصممة لتكون بارزة من بين القطع الإملائية الأخرى.
          </b-p>



          <b-p>يمكنك استخدام تصنيف mark <mark>لتحديد</mark> نص.</b-p>
          <b-p><del>من المفترض أن يتم التعامل مع هذا السطر كنص محذوف.</del></b-p>
          <b-p><s>من المفترض أن يتم التعامل مع هذا السطر على أنه لم يعد دقيقًا.</s></b-p>
          <b-p><ins>من المفترض أن يتم التعامل مع هذا السطر كإضافة إلى المستند.</ins></b-p>
          <b-p><u>سيتم عرض النص في هذا السطر كما وتحته خط.</u></b-p>
          <b-p><small>من المفترض أن يتم التعامل مع هذا السطر على أنه يحوي تفاصيل صغيرة.</small></b-p>
          <b-p><strong>هذا السطر يحوي نص عريض.</strong></b-p>
          <b-p><em>هذا السطر يحوي نص مائل.</em></b-p>



          <hr>



          <BBlockquote class="blockquote">
            <b-p>إقتباس مبهر، موضوع في عنصر blockquote</b-p>
            <footer class="blockquote-footer">
              شخص مشهور في <cite title="عنوان المصدر"> عنوان المصدر </cite>
            </footer>
          </BBlockquote>



          <ul class="list-unstyled">
            <li>هذه قائمة عناصر.</li>
            <li>بالرغم من أنها مصممة كي لا تظهر كذلك.</li>
            <li>إلا أنها مجهزة كـ قائمة خلف الكواليس</li>
            <li>هذا التصميم ينطبق فقد على القائمة الرئيسية</li>
            <li>
              القوائم الفرعية
              <ul>
                <li>لا تتأثر بهذا التصميم</li>
                <li>فهي تظهر عليها علامات الترقيم</li>
                <li>وتحتوي على مساحة فارغة بجوارها</li>
              </ul>
            </li>
            <li>قد يكون هذا التصميم مفيدًا في بعض الأحيان.</li>
          </ul>



          <ul class="list-inline">
            <li class="list-inline-item">
              هذا عنصر في قائمة.
            </li>
            <li class="list-inline-item">
              وهذا أيضًا.
            </li>
            <li class="list-inline-item">
              لكنهم يظهرون متجاورين.
            </li>
          </ul>
        </b-div>
      </article>
      <article
        id="images"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            الصور
          </b-h>
          <b-a
            class="d-flex align-items-center"
            hreflang="en"
            href=""
          >
            دليل الإستخدام
          </b-a>
        </b-div>

        <b-div />
      </article>
      <article
        id="tables"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            الجداول
          </b-h>
          <b-a
            class="d-flex align-items-center"
            hreflang="en"
            href=""
          >
            دليل الإستخدام
          </b-a>
        </b-div>

        <b-div>
          <b-table class="table table-striped">
            <b-thead>
              <b-tr>
                <b-th scope="col">
                  #
                </b-th>
                <b-th scope="col">
                  الاسم الاول
                </b-th>
                <b-th scope="col">
                  الكنية
                </b-th>
                <b-th scope="col">
                  الاسم المستعار
                </b-th>
              </b-tr>
            </b-thead>
            <b-tbody>
              <b-tr>
                <b-th scope="row">
                  1
                </b-th>
                <b-td>Mark</b-td>
                <b-td>Otto</b-td>
                <b-td>
                  <bdo
                    lang="en"
                    dir="ltr"
                  >@mdo</bdo>
                </b-td>
              </b-tr>
              <b-tr>
                <b-th scope="row">
                  2
                </b-th>
                <b-td>Jacob</b-td>
                <b-td>Thornton</b-td>
                <b-td>
                  <bdo
                    lang="en"
                    dir="ltr"
                  >@fat</bdo>
                </b-td>
              </b-tr>
              <b-tr>
                <b-th scope="row">
                  3
                </b-th>
                <b-td colspan="2">
                  Larry the Bird
                </b-td>
                <b-td>
                  <bdo
                    lang="en"
                    dir="ltr"
                  >@twitter</bdo>
                </b-td>
              </b-tr>
            </b-tbody>
          </b-table>



          <b-table class="table table-dark table-borderless">
            <b-thead>
              <b-tr>
                <b-th scope="col">
                  #
                </b-th>
                <b-th scope="col">
                  الاسم الاول
                </b-th>
                <b-th scope="col">
                  الكنية
                </b-th>
                <b-th scope="col">
                  الاسم المستعار
                </b-th>
              </b-tr>
            </b-thead>
            <b-tbody>
              <b-tr>
                <b-th scope="row">
                  1
                </b-th>
                <b-td>Mark</b-td>
                <b-td>Otto</b-td>
                <b-td>
                  <bdo
                    lang="en"
                    dir="ltr"
                  >@mdo</bdo>
                </b-td>
              </b-tr>
              <b-tr>
                <b-th scope="row">
                  2
                </b-th>
                <b-td>Jacob</b-td>
                <b-td>Thornton</b-td>
                <b-td>
                  <bdo
                    lang="en"
                    dir="ltr"
                  >@fat</bdo>
                </b-td>
              </b-tr>
              <b-tr>
                <b-th scope="row">
                  3
                </b-th>
                <b-td colspan="2">
                  Larry the Bird
                </b-td>
                <b-td>
                  <bdo
                    lang="en"
                    dir="ltr"
                  >@twitter</bdo>
                </b-td>
              </b-tr>
            </b-tbody>
          </b-table>



          <b-table class="table table-hover">
            <b-thead>
              <b-tr>
                <b-th scope="col">
                  Class
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
                <b-th scope="row">
                  Default
                </b-th>
                <b-td>خلية</b-td>
                <b-td>خلية</b-td>
              </b-tr>


              <b-tr class="table-">
                <b-th scope="row" />
                <b-td>خلية</b-td>
                <b-td>خلية</b-td>
              </b-tr>
            </b-tbody>
          </b-table>



          <b-table class="table table-sm table-bordered">
            <b-thead>
              <b-tr>
                <b-th scope="col">
                  #
                </b-th>
                <b-th scope="col">
                  الاسم الاول
                </b-th>
                <b-th scope="col">
                  الكنية
                </b-th>
                <b-th scope="col">
                  الاسم المستعار
                </b-th>
              </b-tr>
            </b-thead>
            <b-tbody>
              <b-tr>
                <b-th scope="row">
                  1
                </b-th>
                <b-td>Mark</b-td>
                <b-td>Otto</b-td>
                <b-td>
                  <bdo
                    lang="en"
                    dir="ltr"
                  >@mdo</bdo>
                </b-td>
              </b-tr>
              <b-tr>
                <b-th scope="row">
                  2
                </b-th>
                <b-td>Jacob</b-td>
                <b-td>Thornton</b-td>
                <b-td>
                  <bdo
                    lang="en"
                    dir="ltr"
                  >@fat</bdo>
                </b-td>
              </b-tr>
              <b-tr>
                <b-th scope="row">
                  3
                </b-th>
                <b-td colspan="2">
                  Larry the Bird
                </b-td>
                <b-td>
                  <bdo
                    lang="en"
                    dir="ltr"
                  >@twitter</bdo>
                </b-td>
              </b-tr>
            </b-tbody>
          </b-table>
        </b-div>
      </article>
      <article
        id="figures"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            النماذج البيانية
          </b-h>
          <b-a
            class="d-flex align-items-center"
            hreflang="en"
            href=""
          >
            دليل الإستخدام
          </b-a>
        </b-div>

        <b-div>
          <BFigure class="figure">
            <b-figcaption class="figure-caption">
              شرح للصورة أعلاه.
            </b-figcaption>
          </BFigure>
        </b-div>
      </article>
    </section>

    <section id="forms">
      <b-h
        level="2"
        class="sticky-xl-top fw-bold pt-3 pt-xl-5 pb-2 pb-xl-3"
      >
        النماذج
      </b-h>

      <article
        id="overview"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            نظرة عامة
          </b-h>
          <b-a
            class="d-flex align-items-center"
            hreflang="en"
            href=""
          >
            دليل الإستخدام
          </b-a>
        </b-div>

        <b-div>
          <BForm>
            <b-div class="mb-3">
              <label
                for="exampleInputEmail1"
                class="form-label"
              >البريد الإلكتروني</label>
              <input
                id="exampleInputEmail1"
                type="email"
                class="form-control"
                aria-describedby="emailHelp"
              >
              <b-div
                id="emailHelp"
                class="form-text"
              >
                لن نقوم بمشاركة بريدك الإلكتروني مع أي شخص آخر.
              </b-div>
            </b-div>
            <b-div class="mb-3">
              <label
                for="exampleInputPassword1"
                class="form-label"
              >كلمة السر</label>
              <input
                id="exampleInputPassword1"
                type="password"
                class="form-control"
              >
            </b-div>
            <b-div class="mb-3 form-check">
              <input
                id="exampleCheck1"
                type="checkbox"
                class="form-check-input"
              >
              <label
                class="form-check-label"
                for="exampleCheck1"
              >اخترني</label>
            </b-div>
            <BFieldset class="mb-3">
              <legend>أزرار الاختيار الأحادي</legend>
              <b-div class="form-check">
                <input
                  id="exampleRadio1"
                  type="radio"
                  name="radios"
                  class="form-check-input"
                  checked
                >
                <label
                  class="form-check-label"
                  for="exampleRadio1"
                >الخيار الافتراضي</label>
              </b-div>
              <b-div class="mb-3 form-check">
                <input
                  id="exampleRadio2"
                  type="radio"
                  name="radios"
                  class="form-check-input"
                >
                <label
                  class="form-check-label"
                  for="exampleRadio2"
                >خيار آخر</label>
              </b-div>
            </BFieldset>
            <b-div class="mb-3">
              <label
                class="form-label"
                for="customFile"
              >رفع</label>
              <input
                id="customFile"
                type="file"
                class="form-control"
              >
            </b-div>
            <b-div class="mb-3 form-check form-switch">
              <input
                id="flexSwitchCheckChecked"
                class="form-check-input"
                type="checkbox"
                role="switch"
                checked
              >
              <label
                class="form-check-label"
                for="flexSwitchCheckChecked"
              >زر على شكل مفتاح اختيار.</label>
            </b-div>
            <b-div class="mb-3">
              <label
                for="customRange3"
                class="form-label"
              >مثال على حقل اختيار نطاقي</label>
              <input
                id="customRange3"
                type="range"
                class="form-range"
                min="0"
                max="5"
                step="0.5"
              >
            </b-div>
            <b-button
              type="submit"
              class="btn btn-primary"
            >
              إرسال
            </b-button>
          </BForm>
        </b-div>
      </article>
      <article
        id="disabled-forms"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            الحقول المعطلة
          </b-h>
          <b-a
            class="d-flex align-items-center"
            hreflang="en"
            href="#disabled-forms"
          >
            دليل الإستخدام
          </b-a>
        </b-div>

        <b-div>
          <BForm>
            <BFieldset
              disabled
              aria-label="مثال على مجموعة الحقول المعطلة"
            >
              <b-div class="mb-3">
                <label
                  for="disabledTextInput"
                  class="form-label"
                >حقل إدخال معطل</label>
                <input
                  id="disabledTextInput"
                  type="text"
                  class="form-control"
                  placeholder="حقل إدخال معطل"
                >
              </b-div>
              <b-div class="mb-3">
                <label
                  for="disabledSelect"
                  class="form-label"
                >قائمة اختيار معطلة</label>
                <select
                  id="disabledSelect"
                  class="form-select"
                >
                  <option>خيار معطل</option>
                </select>
              </b-div>
              <b-div class="mb-3">
                <b-div class="form-check">
                  <input
                    id="disabledFieldsetCheck"
                    class="form-check-input"
                    type="checkbox"
                    disabled
                  >
                  <label
                    class="form-check-label"
                    for="disabledFieldsetCheck"
                  >
                    زر اختيار معطل
                  </label>
                </b-div>
              </b-div>
              <BFieldset class="mb-3">
                <legend>أزرار اختيار أحادي معطلين</legend>
                <b-div class="form-check">
                  <input
                    id="disabledRadio1"
                    type="radio"
                    name="radios"
                    class="form-check-input"
                    disabled
                  >
                  <label
                    class="form-check-label"
                    for="disabledRadio1"
                  >خيار معطل</label>
                </b-div>
                <b-div class="mb-3 form-check">
                  <input
                    id="disabledRadio2"
                    type="radio"
                    name="radios"
                    class="form-check-input"
                    disabled
                  >
                  <label
                    class="form-check-label"
                    for="disabledRadio2"
                  >خيار آخر معطل</label>
                </b-div>
              </BFieldset>
              <b-div class="mb-3">
                <label
                  class="form-label"
                  for="disabledCustomFile"
                >رفع معطل</label>
                <input
                  id="disabledCustomFile"
                  type="file"
                  class="form-control"
                  disabled
                >
              </b-div>
              <b-div class="mb-3 form-check form-switch">
                <input
                  id="disabledSwitchCheckChecked"
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  checked
                  disabled
                >
                <label
                  class="form-check-label"
                  for="disabledSwitchCheckChecked"
                >زر معطل على شكل مفتاح اختيار.</label>
              </b-div>
              <b-div class="mb-3">
                <label
                  for="disabledRange"
                  class="form-label"
                >حقل اختيار نطاقي معطل</label>
                <input
                  id="disabledRange"
                  type="range"
                  class="form-range"
                  min="0"
                  max="5"
                  step="0.5"
                >
              </b-div>
              <b-button
                type="submit"
                class="btn btn-primary"
              >
                إرسال
              </b-button>
            </BFieldset>
          </BForm>
        </b-div>
      </article>
      <article
        id="sizing"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            الأحجام
          </b-h>
          <b-a
            class="d-flex align-items-center"
            hreflang="en"
            href="#sizing"
          >
            دليل الإستخدام
          </b-a>
        </b-div>

        <b-div>
          <b-div class="mb-3">
            <BFormInput
              class="form-control form-control-lg"
              type="text"
              placeholder="حقل إدخال كبير"
              aria-label=".form-control-lg مثال"
            />
          </b-div>
          <b-div class="mb-3">
            <select
              class="form-select form-select-lg mb-3"
              aria-label=".form-select-lg مثال"
            >
              <option selected>
                افتح قائمة الاختيار هذه
              </option>
              <option value="1">
                واحد
              </option>
              <option value="2">
                اثنان
              </option>
              <option value="3">
                ثلاثة
              </option>
            </select>
          </b-div>
          <b-div class="mb-3">
            <input
              type="file"
              class="form-control form-control-lg"
              aria-label="مثال على إدخال ملف كبير"
            >
          </b-div>



          <b-div class="mb-3">
            <BFormInput
              class="form-control form-control-sm"
              type="text"
              placeholder="حقل إدخال صغير"
              aria-label=".form-control-sm مثال"
            />
          </b-div>
          <b-div class="mb-3">
            <select
              class="form-select form-select-sm"
              aria-label=".form-select-sm مثال"
            >
              <option selected>
                افتح قائمة الاختيار هذه
              </option>
              <option value="1">
                واحد
              </option>
              <option value="2">
                اثنان
              </option>
              <option value="3">
                ثلاثة
              </option>
            </select>
          </b-div>
          <b-div class="mb-3">
            <input
              type="file"
              class="form-control form-control-sm"
              aria-label="مثال على إدخال ملف صغير"
            >
          </b-div>
        </b-div>
      </article>
      <article
        id="input-group"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            مجموعة الإدخال
          </b-h>
          <b-a
            class="d-flex align-items-center"
            hreflang="en"
            href=""
          >
            دليل الإستخدام
          </b-a>
        </b-div>

        <b-div>
          <b-div class="input-group mb-3">
            <b-span
              id="basic-addon1"
              class="input-group-text"
            >
              أنا اسمي
            </b-span>
            <input
              type="text"
              class="form-control"
              placeholder="فلان الفلاني"
              aria-label="الاسم"
              aria-describedby="basic-addon1"
            >
          </b-div>
          <b-div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="أنا أحب الكعك والقهوة"
              aria-label="الطعام المفضل"
              aria-describedby="basic-addon2"
            >
            <b-span
              id="basic-addon2"
              class="input-group-text"
            >
              وغيرها
            </b-span>
          </b-div>
          <label
            for="basic-url"
            class="form-label"
          >عنوان حسابك الشخصي</label>
          <b-div class="input-group mb-3">
            <input
              id="basic-url"
              type="text"
              class="form-control"
              aria-describedby="basic-addon3"
            >
            <b-span
              id="basic-addon3"
              class="input-group-text"
            >
              <bdo
                lang="en"
                dir="ltr"
              >https://example.com/users/</bdo>
            </b-span>
          </b-div>
          <b-div class="input-group mb-3">
            <b-span class="input-group-text">
              <bdo
                lang="en"
                dir="ltr"
              >.00</bdo>
            </b-span>
            <input
              type="text"
              class="form-control"
              aria-label="المبلغ (لأقرب دولار)"
            >
            <b-span class="input-group-text">
              $
            </b-span>
          </b-div>
          <b-div class="input-group">
            <b-span class="input-group-text">
              مع textarea
            </b-span>
            <textarea
              class="form-control"
              aria-label="مع textarea"
            />
          </b-div>
        </b-div>
      </article>
      <article
        id="floating-labels"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            الحقول ذوي العناوين العائمة
          </b-h>
          <b-a
            class="d-flex align-items-center"
            href=""
          >
            دليل الإستخدام
          </b-a>
        </b-div>

        <b-div>
          <BForm>
            <b-div class="form-floating mb-3">
              <input
                id="floatingInput"
                type="email"
                class="form-control"
                placeholder="name@example.com"
              >
              <label for="floatingInput">البريد الالكتروني</label>
            </b-div>
            <b-div class="form-floating">
              <input
                id="floatingPassword"
                type="password"
                class="form-control"
                placeholder="كلمة السر"
              >
              <label for="floatingPassword">كلمة السر</label>
            </b-div>
          </BForm>
        </b-div>
      </article>
      <article
        id="validation"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            التحقق
          </b-h>
          <b-a
            class="d-flex align-items-center"
            hreflang="en"
            href=""
          >
            دليل الإستخدام
          </b-a>
        </b-div>

        <b-div>
          <BForm class="row g-3">
            <b-div class="col-md-4">
              <label
                for="validationServer01"
                class="form-label"
              >الاسم الاول</label>
              <input
                id="validationServer01"
                type="text"
                class="form-control is-valid"
                value="Mark"
                required
              >
              <b-div class="valid-feedback">
                يبدو صحيحًا!
              </b-div>
            </b-div>
            <b-div class="col-md-4">
              <label
                for="validationServer02"
                class="form-label"
              >الكنية</label>
              <input
                id="validationServer02"
                type="text"
                class="form-control is-valid"
                value="Otto"
                required
              >
              <b-div class="valid-feedback">
                يبدو صحيحًا!
              </b-div>
            </b-div>
            <b-div class="col-md-4">
              <label
                for="validationServerUsername"
                class="form-label"
              >اسم المستخدم</label>
              <b-div class="input-group has-validation">
                <input
                  id="validationServerUsername"
                  type="text"
                  class="form-control is-invalid"
                  aria-describedby="BInputGroupPrepend3"
                  required
                >
                <b-span
                  id="BInputGroupPrepend3"
                  class="input-group-text"
                >
                  @
                </b-span>
                <b-div class="invalid-feedback">
                  يرجى اختيار اسم مستخدم.
                </b-div>
              </b-div>
            </b-div>
            <b-div class="col-md-6">
              <label
                for="validationServer03"
                class="form-label"
              >مدينة</label>
              <input
                id="validationServer03"
                type="text"
                class="form-control is-invalid"
                required
              >
              <b-div class="invalid-feedback">
                يرجى إدخال مدينة صحيحة.
              </b-div>
            </b-div>
            <b-div class="col-md-3">
              <label
                for="validationServer04"
                class="form-label"
              >حالة</label>
              <select
                id="validationServer04"
                class="form-select is-invalid"
                required
              >
                <option
                  selected
                  disabled
                  value=""
                >
                  اختر...
                </option>
                <option>...</option>
              </select>
              <b-div class="invalid-feedback">
                يرجى اختيار ولاية صحيحة.
              </b-div>
            </b-div>
            <b-div class="col-md-3">
              <label
                for="validationServer05"
                class="form-label"
              >الرمز البريدي</label>
              <input
                id="validationServer05"
                type="text"
                class="form-control is-invalid"
                required
              >
              <b-div class="invalid-feedback">
                يرجى إدخال رمز بريدي صحيح.
              </b-div>
            </b-div>
            <b-div class="col-12">
              <b-div class="form-check">
                <input
                  id="invalidCheck3"
                  class="form-check-input is-invalid"
                  type="checkbox"
                  value=""
                  required
                >
                <label
                  class="form-check-label"
                  for="invalidCheck3"
                >
                  أوافق على الشروط والأحكام
                </label>
                <b-div class="invalid-feedback">
                  تجب الموافقة قبل إرسال النموذج.
                </b-div>
              </b-div>
            </b-div>
            <b-div class="col-12">
              <b-button
                class="btn btn-primary"
                type="submit"
              >
                إرسال النموذج
              </b-button>
            </b-div>
          </BForm>
        </b-div>
      </article>
    </section>

    <section id="components">
      <b-h
        level="2"
        class="sticky-xl-top fw-bold pt-3 pt-xl-5 pb-2 pb-xl-3"
      >
        العناصر
      </b-h>

      <article
        id="accordion"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            المطوية
          </b-h>
          <b-a
            class="d-flex align-items-center"
            hreflang="en"
            href=""
          >
            دليل الإستخدام
          </b-a>
        </b-div>

        <b-div>
          <b-div
            id="accordionExample"
            class="accordion"
          >
            <b-div class="accordion-item">
              <b-h
                id="headingOne"
                level="4"
                class="accordion-header"
              >
                <b-button
                  class="accordion-button"
                  type="button"
                  toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  عنصر المطوية الأول
                </b-button>
              </b-h>
              <b-div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <b-div class="accordion-body">
                  <strong>هذا هو محتوى عنصر المطوية الأول.</strong> سيكون المحتوى مخفيًا بشكل إفتراضي حتى يقوم Bootstrap بإضافة الكلاسات اللازمة لكل عنصر في المطوية. هذه الكلاسات تتحكم بالمظهر العام ووتتحكم أيضا بإظهار وإخفاء أقسام المطوية عبر حركات CSS الإنتقالية. يمكنك تعديل أي من هذه عبر كلاسات CSS خاصة بك، او عبر تغيير القيم الإفتراضية المقدمة من Bootstrap. من الجدير بالذكر أنه يمكن وضع أي كود HTML هنا، ولكن الحركة الإنتقالية قد تحد من الoverflow.
                </b-div>
              </b-div>
            </b-div>
            <b-div class="accordion-item">
              <b-h
                id="headingTwo"
                level="4"
                class="accordion-header"
              >
                <b-button
                  class="accordion-button collapsed"
                  type="button"
                  toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  عنصر المطوية الثاني
                </b-button>
              </b-h>
              <b-div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <b-div class="accordion-body">
                  <strong>هذا هو محتوى عنصر المطوية الثاني.</strong> سيكون المحتوى مخفيًا بشكل إفتراضي حتى يقوم Bootstrap بإضافة الكلاسات اللازمة لكل عنصر في المطوية. هذه الكلاسات تتحكم بالمظهر العام ووتتحكم أيضا بإظهار وإخفاء أقسام المطوية عبر حركات CSS الإنتقالية. يمكنك تعديل أي من هذه عبر كلاسات CSS خاصة بك، او عبر تغيير القيم الإفتراضية المقدمة من Bootstrap. من الجدير بالذكر أنه يمكن وضع أي كود HTML هنا، ولكن الحركة الإنتقالية قد تحد من الoverflow.
                </b-div>
              </b-div>
            </b-div>
            <b-div class="accordion-item">
              <b-h
                id="headingThree"
                level="4"
                class="accordion-header"
              >
                <b-button
                  class="accordion-button collapsed"
                  type="button"
                  toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  عنصر المطوية الثالث
                </b-button>
              </b-h>
              <b-div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <b-div class="accordion-body">
                  <strong>هذا هو محتوى عنصر المطوية الثالث.</strong> سيكون المحتوى مخفيًا بشكل إفتراضي حتى يقوم Bootstrap بإضافة الكلاسات اللازمة لكل عنصر في المطوية. هذه الكلاسات تتحكم بالمظهر العام ووتتحكم أيضا بإظهار وإخفاء أقسام المطوية عبر حركات CSS الإنتقالية. يمكنك تعديل أي من هذه عبر كلاسات CSS خاصة بك، او عبر تغيير القيم الإفتراضية المقدمة من Bootstrap. من الجدير بالذكر أنه يمكن وضع أي كود HTML هنا، ولكن الحركة الإنتقالية قد تحد من الoverflow.
                </b-div>
              </b-div>
            </b-div>
          </b-div>
        </b-div>
      </article>
      <article
        id="alerts"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            الإنذارات
          </b-h>
          <b-a
            class="d-flex align-items-center"
            hreflang="en"
            href=""
          >
            دليل الإستخدام
          </b-a>
        </b-div>

        <b-div>
          <b-div
            class="alert alert- alert-dismissible fade show"
            role="alert"
          >
            تنبيه بسيط مع <b-a
              href="#"
              class="alert-link"
            >
              رابط مثال
            </b-a>. أعطها نقرة إذا أردت.
            <b-button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="قريب"
            />
          </b-div>




          <b-div
            class="alert alert-success"
            role="alert"
          >
            <b-h
              level="4"
              class="alert-heading"
            >
              أحسنت!
            </b-h>
            <b-p>لقد نجحت في قراءة رسالة التنبيه المهمة هذه. سيتم تشغيل نص المثال هذا لفترة أطول قليلاً حتى تتمكن من رؤية كيفية عمل التباعد داخل التنبيه مع هذا النوع من المحتوى.</b-p>
            <hr>
            <b-p class="mb-0">
              كلما احتجت إلى ذلك ، تأكد من استخدام أدوات الهامش للحفاظ على الأشياء لطيفة ومرتبة.
            </b-p>
          </b-div>
        </b-div>
      </article>
      <article
        id="badge"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            الشارة
          </b-h>
          <b-a
            class="d-flex align-items-center"
            hreflang="en"
            href=""
          >
            دليل الإستخدام
          </b-a>
        </b-div>

        <b-div>
          <b-p class="h1">
            مثال على عنوان <b-span class="badge bg-primary">
              جديد
            </b-span>
          </b-p>
          <b-p class="h2">
            مثال على عنوان <b-span class="badge bg-secondary">
              جديد
            </b-span>
          </b-p>
          <b-p class="h3">
            مثال على عنوان <b-span class="badge bg-success">
              جديد
            </b-span>
          </b-p>
          <b-p class="h4">
            مثال على عنوان <b-span class="badge bg-danger">
              جديد
            </b-span>
          </b-p>
          <b-p class="h5">
            مثال على عنوان <b-span class="badge bg-warning text-dark">
              جديد
            </b-span>
          </b-p>
          <b-p class="h6">
            مثال على عنوان <b-span class="badge bg-info text-dark">
              جديد
            </b-span>
          </b-p>
          <b-p class="h6">
            مثال على عنوان <b-span class="badge bg-light text-dark">
              جديد
            </b-span>
          </b-p>
          <b-p class="h6">
            مثال على عنوان <b-span class="badge bg-dark">
              جديد
            </b-span>
          </b-p>





          <b-span class="badge rounded-pill bg-" />
        </b-div>
      </article>
      <article
        id="breadcrumb"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            مسار التنقل التفصيلي (فتات الخبز)
          </b-h>
          <b-a
            class="d-flex align-items-center"
            hreflang="en"
            href=""
          >
            دليل الإستخدام
          </b-a>
        </b-div>

        <b-div>
          <Nav aria-label="فتات الخبز">
            <b-ol class="breadcrumb">
              <li class="breadcrumb-item">
                <b-a href="#">
                  الصفحة الرئيسية
                </b-a>
              </li>
              <li class="breadcrumb-item">
                <b-a href="#">
                  المكتبة
                </b-a>
              </li>
              <li
                class="breadcrumb-item active"
                aria-current="page"
              >
                البيانات
              </li>
            </b-ol>
          </Nav>
        </b-div>
      </article>
      <article
        id="buttons"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            الأزرار
          </b-h>
          <b-a
            class="d-flex align-items-center"
            hreflang="en"
            href=""
          >
            دليل الإستخدام
          </b-a>
        </b-div>

        <b-div>
          <b-button
            type="button"
            class="btn btn-"
          />



          <b-button
            type="button"
            class="btn btn-link"
          >
            رابط
          </b-button>





          <b-button
            type="button"
            class="btn btn-outline-"
          />





          <b-button
            type="button"
            class="btn btn-primary btn-sm"
          >
            زر صغير
          </b-button>
          <b-button
            type="button"
            class="btn btn-primary"
          >
            زر قياسي
          </b-button>
          <b-button
            type="button"
            class="btn btn-primary btn-lg"
          >
            زر كبير
          </b-button>
        </b-div>
      </article>
      <article
        id="button-group"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            مجموعة الأزرار
          </b-h>
          <b-a
            class="d-flex align-items-center"
            hreflang="en"
            href=""
          >
            دليل الإستخدام
          </b-a>
        </b-div>

        <b-div>
          <b-div
            class="btn-toolbar"
            role="toolbar"
            aria-label="شريط أدوات مع مجموعات أزرار"
          >
            <b-div
              class="btn-group me-2"
              role="group"
              aria-label="المجموعة الأولى"
            >
              <b-button
                type="button"
                class="btn btn-secondary"
              >
                1
              </b-button>
              <b-button
                type="button"
                class="btn btn-secondary"
              >
                2
              </b-button>
              <b-button
                type="button"
                class="btn btn-secondary"
              >
                3
              </b-button>
              <b-button
                type="button"
                class="btn btn-secondary"
              >
                4
              </b-button>
            </b-div>
            <b-div
              class="btn-group me-2"
              role="group"
              aria-label="المجموعة الثانية"
            >
              <b-button
                type="button"
                class="btn btn-secondary"
              >
                5
              </b-button>
              <b-button
                type="button"
                class="btn btn-secondary"
              >
                6
              </b-button>
              <b-button
                type="button"
                class="btn btn-secondary"
              >
                7
              </b-button>
            </b-div>
            <b-div
              class="btn-group"
              role="group"
              aria-label="المجموعة الثالثة"
            >
              <b-button
                type="button"
                class="btn btn-secondary"
              >
                8
              </b-button>
            </b-div>
          </b-div>
        </b-div>
      </article>
      <article
        id="card"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            البطاقة
          </b-h>
          <b-a
            class="d-flex align-items-center"
            hreflang="en"
            href=""
          >
            دليل الإستخدام
          </b-a>
        </b-div>

        <b-div>
          <b-div class="row  row-cols-1 row-cols-md-2 g-4">
            <b-div class="col">
              <b-div class="card">
                <b-div class="card-body">
                  <b-h
                    level="5"
                    class="card-title"
                  >
                    عنوان البطاقة
                  </b-h>
                  <b-p class="card-text">
                    بعض الأمثلة السريعة للنصوص للبناء على عنوان البطاقة وتشكيل الجزء الأكبر من محتوى البطاقة.
                  </b-p>
                  <b-a
                    href="#"
                    class="btn btn-primary"
                  >
                    اذهب لمكان ما
                  </b-a>
                </b-div>
              </b-div>
            </b-div>
            <b-div class="col">
              <b-div class="card">
                <b-div class="card-header">
                  متميز
                </b-div>
                <b-div class="card-body">
                  <b-h
                    level="5"
                    class="card-title"
                  >
                    عنوان البطاقة
                  </b-h>
                  <b-p class="card-text">
                    بعض الأمثلة السريعة للنصوص للبناء على عنوان البطاقة وتشكيل الجزء الأكبر من محتوى البطاقة.
                  </b-p>
                  <b-a
                    href="#"
                    class="btn btn-primary"
                  >
                    اذهب لمكان ما
                  </b-a>
                </b-div>
                <b-div class="card-footer text-muted">
                  منذ يومان
                </b-div>
              </b-div>
            </b-div>
            <b-div class="col">
              <b-div class="card">
                <b-div class="card-body">
                  <b-h
                    level="5"
                    class="card-title"
                  >
                    عنوان البطاقة
                  </b-h>
                  <b-p class="card-text">
                    بعض الأمثلة السريعة للنصوص للبناء على عنوان البطاقة وتشكيل الجزء الأكبر من محتوى البطاقة.
                  </b-p>
                </b-div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    عنصر
                  </li>
                  <li class="list-group-item">
                    عنصر آخر
                  </li>
                  <li class="list-group-item">
                    عنصر ثالث
                  </li>
                </ul>
                <b-div class="card-body">
                  <b-a
                    href="#"
                    class="card-link"
                  >
                    رابط البطاقة
                  </b-a>
                  <b-a
                    href="#"
                    class="card-link"
                  >
                    رابط آخر
                  </b-a>
                </b-div>
              </b-div>
            </b-div>
            <b-div class="col">
              <b-div class="card">
                <b-div class="row g-0">
                  <b-div class="col-md-4" />
                  <b-div class="col-md-8">
                    <b-div class="card-body">
                      <b-h
                        level="5"
                        class="card-title"
                      >
                        عنوان البطاقة
                      </b-h>
                      <b-p class="card-text">
                        هذه بطاقة أعرض مع نص داعم تحتها كمقدمة طبيعية لمحتوى إضافي. هذا المحتوى أطول قليلاً.
                      </b-p>
                      <b-p class="card-text">
                        <small class="text-muted">آخر تحديث منذ 3 دقائق</small>
                      </b-p>
                    </b-div>
                  </b-div>
                </b-div>
              </b-div>
            </b-div>
          </b-div>
        </b-div>
      </article>
      <article
        id="carousel"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            شرائح العرض
          </b-h>
          <b-a
            class="d-flex align-items-center"
            hreflang="en"
            href=""
          >
            دليل الإستخدام
          </b-a>
        </b-div>

        <b-div>
          <b-div
            id="carouselExampleCaptions"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <b-div class="carousel-indicators">
              <b-button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="الشريحة الأولى"
              />
              <b-button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="الشريحة الثانية"
              />
              <b-button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="الشريحة الثالثة"
              />
            </b-div>
            <b-div class="carousel-inner">
              <b-div class="carousel-item active">
                <b-div class="carousel-caption d-none d-md-block">
                  <b-h level="5">
                    عنوان الشريحة الأولى
                  </b-h>
                  <b-p>محتوى وصفي يعبئ فراغ الشريحة الأولى.</b-p>
                </b-div>
              </b-div>
              <b-div class="carousel-item">
                <b-div class="carousel-caption d-none d-md-block">
                  <b-h level="5">
                    عنوان الشريحة الثانية
                  </b-h>
                  <b-p>محتوى وصفي يعبئ فراغ الشريحة الأولى.</b-p>
                </b-div>
              </b-div>
              <b-div class="carousel-item">
                <b-div class="carousel-caption d-none d-md-block">
                  <b-h level="5">
                    عنوان الشريحة الثالثة
                  </b-h>
                  <b-p>محتوى وصفي يعبئ فراغ الشريحة الأولى.</b-p>
                </b-div>
              </b-div>
            </b-div>
            <b-button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <b-span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              />
              <b-span class="visually-hidden">
                السابق
              </b-span>
            </b-button>
            <b-button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <b-span
                class="carousel-control-next-icon"
                aria-hidden="true"
              />
              <b-span class="visually-hidden">
                التالي
              </b-span>
            </b-button>
          </b-div>
        </b-div>
      </article>
      <article
        id="dropdowns"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            القوائم المنسدلة
          </b-h>
          <b-a
            class="d-flex align-items-center"
            hreflang="en"
            href=""
          >
            دليل الإستخدام
          </b-a>
        </b-div>

        <b-div>
          <b-div class="btn-group w-100 align-items-center justify-content-between flex-wrap">
            <b-div class="dropdown">
              <b-button
                id="dropdownMenuButtonSM"
                class="btn btn-secondary btn-sm dropdown-toggle"
                type="button"
                toggle="dropdown"
                aria-expanded="false"
              >
                زر القائمة المنسدلة
              </b-button>
              <ul
                class="dropdown-menu"
                aria-labelledby="dropdownMenuButtonSM"
              >
                <li>
                  <b-h
                    level="6"
                    class="dropdown-header"
                  >
                    عنوان القائمة المنسدلة
                  </b-h>
                </li>
                <li>
                  <b-a
                    class="dropdown-item"
                    href="#"
                  >
                    عمل
                  </b-a>
                </li>
                <li>
                  <b-a
                    class="dropdown-item"
                    href="#"
                  >
                    عمل آخر
                  </b-a>
                </li>
                <li>
                  <b-a
                    class="dropdown-item"
                    href="#"
                  >
                    شيء آخر هنا
                  </b-a>
                </li>
                <li>
                  <hr class="dropdown-b-divider">
                </li>
                <li>
                  <b-a
                    class="dropdown-item"
                    href="#"
                  >
                    رابط منفصل
                  </b-a>
                </li>
              </ul>
            </b-div>
            <b-div class="dropdown">
              <b-button
                id="dropdownMenuButton"
                class="btn btn-secondary dropdown-toggle"
                type="button"
                toggle="dropdown"
                aria-expanded="false"
              >
                زر القائمة المنسدلة
              </b-button>
              <ul
                class="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <b-h
                    level="6"
                    class="dropdown-header"
                  >
                    عنوان القائمة المنسدلة
                  </b-h>
                </li>
                <li>
                  <b-a
                    class="dropdown-item"
                    href="#"
                  >
                    عمل
                  </b-a>
                </li>
                <li>
                  <b-a
                    class="dropdown-item"
                    href="#"
                  >
                    عمل آخر
                  </b-a>
                </li>
                <li>
                  <b-a
                    class="dropdown-item"
                    href="#"
                  >
                    شيء آخر هنا
                  </b-a>
                </li>
                <li>
                  <hr class="dropdown-b-divider">
                </li>
                <li>
                  <b-a
                    class="dropdown-item"
                    href="#"
                  >
                    رابط منفصل
                  </b-a>
                </li>
              </ul>
            </b-div>
            <b-div class="dropdown">
              <b-button
                id="dropdownMenuButtonLG"
                class="btn btn-secondary btn-lg dropdown-toggle"
                type="button"
                toggle="dropdown"
                aria-expanded="false"
              >
                زر القائمة المنسدلة
              </b-button>
              <ul
                class="dropdown-menu"
                aria-labelledby="dropdownMenuButtonLG"
              >
                <li>
                  <b-h
                    level="6"
                    class="dropdown-header"
                  >
                    عنوان القائمة المنسدلة
                  </b-h>
                </li>
                <li>
                  <b-a
                    class="dropdown-item"
                    href="#"
                  >
                    عمل
                  </b-a>
                </li>
                <li>
                  <b-a
                    class="dropdown-item"
                    href="#"
                  >
                    عمل آخر
                  </b-a>
                </li>
                <li>
                  <b-a
                    class="dropdown-item"
                    href="#"
                  >
                    شيء آخر هنا
                  </b-a>
                </li>
                <li>
                  <hr class="dropdown-b-divider">
                </li>
                <li>
                  <b-a
                    class="dropdown-item"
                    href="#"
                  >
                    رابط منفصل
                  </b-a>
                </li>
              </ul>
            </b-div>
          </b-div>



          <b-div class="btn-group">
            <b-button
              type="button"
              class="btn btn-primary"
            >
              Primary
            </b-button>
            <b-button
              type="button"
              class="btn btn-primary dropdown-toggle dropdown-toggle-split"
              toggle="dropdown"
              aria-expanded="false"
            >
              <b-span class="visually-hidden">
                تبديل القائمة المنسدلة
              </b-span>
            </b-button>
            <ul class="dropdown-menu">
              <li>
                <b-a
                  class="dropdown-item"
                  href="#"
                >
                  عمل
                </b-a>
              </li>
              <li>
                <b-a
                  class="dropdown-item"
                  href="#"
                >
                  عمل آخر
                </b-a>
              </li>
              <li>
                <b-a
                  class="dropdown-item"
                  href="#"
                >
                  شيء آخر هنا
                </b-a>
              </li>
            </ul>
          </b-div><!-- /btn-group -->
          <b-div class="btn-group">
            <b-button
              type="button"
              class="btn btn-secondary"
            >
              Secondary
            </b-button>
            <b-button
              type="button"
              class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
              toggle="dropdown"
              aria-expanded="false"
            >
              <b-span class="visually-hidden">
                تبديل القائمة المنسدلة
              </b-span>
            </b-button>
            <ul class="dropdown-menu">
              <li>
                <b-a
                  class="dropdown-item"
                  href="#"
                >
                  عمل
                </b-a>
              </li>
              <li>
                <b-a
                  class="dropdown-item"
                  href="#"
                >
                  عمل آخر
                </b-a>
              </li>
              <li>
                <b-a
                  class="dropdown-item"
                  href="#"
                >
                  شيء آخر هنا
                </b-a>
              </li>
            </ul>
          </b-div><!-- /btn-group -->
          <b-div class="btn-group">
            <b-button
              type="button"
              class="btn btn-success"
            >
              Success
            </b-button>
            <b-button
              type="button"
              class="btn btn-success dropdown-toggle dropdown-toggle-split"
              toggle="dropdown"
              aria-expanded="false"
            >
              <b-span class="visually-hidden">
                تبديل القائمة المنسدلة
              </b-span>
            </b-button>
            <ul class="dropdown-menu">
              <li>
                <b-a
                  class="dropdown-item"
                  href="#"
                >
                  عمل
                </b-a>
              </li>
              <li>
                <b-a
                  class="dropdown-item"
                  href="#"
                >
                  عمل آخر
                </b-a>
              </li>
              <li>
                <b-a
                  class="dropdown-item"
                  href="#"
                >
                  شيء آخر هنا
                </b-a>
              </li>
            </ul>
          </b-div><!-- /btn-group -->
          <b-div class="btn-group">
            <b-button
              type="button"
              class="btn btn-info"
            >
              Info
            </b-button>
            <b-button
              type="button"
              class="btn btn-info dropdown-toggle dropdown-toggle-split"
              toggle="dropdown"
              aria-expanded="false"
            >
              <b-span class="visually-hidden">
                تبديل القائمة المنسدلة
              </b-span>
            </b-button>
            <ul class="dropdown-menu">
              <li>
                <b-a
                  class="dropdown-item"
                  href="#"
                >
                  عمل
                </b-a>
              </li>
              <li>
                <b-a
                  class="dropdown-item"
                  href="#"
                >
                  عمل آخر
                </b-a>
              </li>
              <li>
                <b-a
                  class="dropdown-item"
                  href="#"
                >
                  شيء آخر هنا
                </b-a>
              </li>
            </ul>
          </b-div><!-- /btn-group -->
          <b-div class="btn-group">
            <b-button
              type="button"
              class="btn btn-warning"
            >
              Warning
            </b-button>
            <b-button
              type="button"
              class="btn btn-warning dropdown-toggle dropdown-toggle-split"
              toggle="dropdown"
              aria-expanded="false"
            >
              <b-span class="visually-hidden">
                تبديل القائمة المنسدلة
              </b-span>
            </b-button>
            <ul class="dropdown-menu">
              <li>
                <b-a
                  class="dropdown-item"
                  href="#"
                >
                  عمل
                </b-a>
              </li>
              <li>
                <b-a
                  class="dropdown-item"
                  href="#"
                >
                  عمل آخر
                </b-a>
              </li>
              <li>
                <b-a
                  class="dropdown-item"
                  href="#"
                >
                  شيء آخر هنا
                </b-a>
              </li>
            </ul>
          </b-div><!-- /btn-group -->
          <b-div class="btn-group">
            <b-button
              type="button"
              class="btn btn-danger"
            >
              Danger
            </b-button>
            <b-button
              type="button"
              class="btn btn-danger dropdown-toggle dropdown-toggle-split"
              toggle="dropdown"
              aria-expanded="false"
            >
              <b-span class="visually-hidden">
                تبديل القائمة المنسدلة
              </b-span>
            </b-button>
            <ul class="dropdown-menu">
              <li>
                <b-a
                  class="dropdown-item"
                  href="#"
                >
                  عمل
                </b-a>
              </li>
              <li>
                <b-a
                  class="dropdown-item"
                  href="#"
                >
                  عمل آخر
                </b-a>
              </li>
              <li>
                <b-a
                  class="dropdown-item"
                  href="#"
                >
                  شيء آخر هنا
                </b-a>
              </li>
            </ul>
          </b-div><!-- /btn-group -->



          <b-div class="btn-group w-100 align-items-center justify-content-between flex-wrap">
            <b-div class="dropend">
              <b-button
                id="dropendMenuButton"
                class="btn btn-secondary dropdown-toggle"
                type="button"
                toggle="dropdown"
                aria-expanded="false"
              >
                زر القائمة المنسدلة لليسار
              </b-button>
              <ul
                class="dropdown-menu"
                aria-labelledby="dropendMenuButton"
              >
                <li>
                  <b-h
                    level="6"
                    class="dropdown-header"
                  >
                    عنوان القائمة المنسدلة
                  </b-h>
                </li>
                <li>
                  <b-a
                    class="dropdown-item"
                    href="#"
                  >
                    عمل
                  </b-a>
                </li>
                <li>
                  <b-a
                    class="dropdown-item"
                    href="#"
                  >
                    عمل آخر
                  </b-a>
                </li>
                <li>
                  <b-a
                    class="dropdown-item"
                    href="#"
                  >
                    شيء آخر هنا
                  </b-a>
                </li>
                <li>
                  <hr class="dropdown-b-divider">
                </li>
                <li>
                  <b-a
                    class="dropdown-item"
                    href="#"
                  >
                    رابط منفصل
                  </b-a>
                </li>
              </ul>
            </b-div>
            <b-div class="dropup">
              <b-button
                id="dropupMenuButton"
                class="btn btn-secondary dropdown-toggle"
                type="button"
                toggle="dropdown"
                aria-expanded="false"
              >
                زر القائمة المنسدلة للأعلى
              </b-button>
              <ul
                class="dropdown-menu"
                aria-labelledby="dropupMenuButton"
              >
                <li>
                  <b-h
                    level="6"
                    class="dropdown-header"
                  >
                    عنوان القائمة المنسدلة
                  </b-h>
                </li>
                <li>
                  <b-a
                    class="dropdown-item"
                    href="#"
                  >
                    عمل
                  </b-a>
                </li>
                <li>
                  <b-a
                    class="dropdown-item"
                    href="#"
                  >
                    عمل آخر
                  </b-a>
                </li>
                <li>
                  <b-a
                    class="dropdown-item"
                    href="#"
                  >
                    شيء آخر هنا
                  </b-a>
                </li>
                <li>
                  <hr class="dropdown-b-divider">
                </li>
                <li>
                  <b-a
                    class="dropdown-item"
                    href="#"
                  >
                    رابط منفصل
                  </b-a>
                </li>
              </ul>
            </b-div>
            <b-div class="dropstart">
              <b-button
                id="dropstartMenuButton"
                class="btn btn-secondary dropdown-toggle"
                type="button"
                toggle="dropdown"
                aria-expanded="false"
              >
                زر القائمة المنسدلة لليمين
              </b-button>
              <ul
                class="dropdown-menu"
                aria-labelledby="dropstartMenuButton"
              >
                <li>
                  <b-h
                    level="6"
                    class="dropdown-header"
                  >
                    عنوان القائمة المنسدلة
                  </b-h>
                </li>
                <li>
                  <b-a
                    class="dropdown-item"
                    href="#"
                  >
                    عمل
                  </b-a>
                </li>
                <li>
                  <b-a
                    class="dropdown-item"
                    href="#"
                  >
                    عمل آخر
                  </b-a>
                </li>
                <li>
                  <b-a
                    class="dropdown-item"
                    href="#"
                  >
                    شيء آخر هنا
                  </b-a>
                </li>
                <li>
                  <hr class="dropdown-b-divider">
                </li>
                <li>
                  <b-a
                    class="dropdown-item"
                    href="#"
                  >
                    رابط منفصل
                  </b-a>
                </li>
              </ul>
            </b-div>
          </b-div>



          <b-div class="btn-group">
            <b-div class="dropdown">
              <b-button
                id="dropdownRightMenuButton"
                class="btn btn-secondary dropdown-toggle"
                type="button"
                toggle="dropdown"
                aria-expanded="false"
              >
                قائمة منسدلة بمحاذاة نهاية الزر
              </b-button>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="dropdownRightMenuButton"
              >
                <li>
                  <b-h
                    level="6"
                    class="dropdown-header"
                  >
                    عنوان القائمة المنسدلة
                  </b-h>
                </li>
                <li>
                  <b-a
                    class="dropdown-item"
                    href="#"
                  >
                    عمل
                  </b-a>
                </li>
                <li>
                  <b-a
                    class="dropdown-item"
                    href="#"
                  >
                    عمل آخر
                  </b-a>
                </li>
                <li>
                  <hr class="dropdown-b-divider">
                </li>
                <li>
                  <b-a
                    class="dropdown-item"
                    href="#"
                  >
                    رابط منفصل
                  </b-a>
                </li>
              </ul>
            </b-div>
          </b-div>
        </b-div>
      </article>
      <article
        id="list-group"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            مجموعة العناصر
          </b-h>
          <b-a
            class="d-flex align-items-center"
            hreflang="en"
            href=""
          >
            دليل الإستخدام
          </b-a>
        </b-div>

        <b-div>
          <ul class="list-group">
            <li
              class="list-group-item disabled"
              aria-disabled="true"
            >
              عنصر معطل
            </li>
            <li class="list-group-item">
              عنصر ثاني
            </li>
            <li class="list-group-item">
              عنصر ثالث
            </li>
            <li class="list-group-item">
              عنصر رابع
            </li>
            <li class="list-group-item">
              وعنصر خامس أيضًا
            </li>
          </ul>



          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              عنصر
            </li>
            <li class="list-group-item">
              عنصر ثاني
            </li>
            <li class="list-group-item">
              عنصر ثالث
            </li>
            <li class="list-group-item">
              عنصر رابع
            </li>
            <li class="list-group-item">
              وعنصر خامس أيضًا
            </li>
          </ul>



          <b-div class="list-group">
            <b-a
              href="#"
              class="list-group-item list-group-item-action"
            >
              عنصر مجموعة قائمة default بسيط
            </b-a>


            <b-a
              href="#"
              class="list-group-item list-group-item-action list-group-item-"
            >
              بسيط
            </b-a>
          </b-div>
        </b-div>
      </article>
      <article
        id="modal"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            الصندوق العائم
          </b-h>
          <b-a
            class="d-flex align-items-center"
            hreflang="en"
            href=""
          >
            دليل الإستخدام
          </b-a>
        </b-div>

        <b-div>
          <b-div class="d-flex justify-content-between flex-wrap">
            <b-button
              type="button"
              class="btn btn-primary"
              toggle="modal"
              data-bs-target="#exampleModalDefault"
            >
              إطلاق صندوق عائم تجريبي
            </b-button>
            <b-button
              type="button"
              class="btn btn-primary"
              toggle="modal"
              data-bs-target="#staticBackdropLive"
            >
              إطلاق صندوق عائم عالق
            </b-button>
            <b-button
              type="button"
              class="btn btn-primary"
              toggle="modal"
              data-bs-target="#exampleModalCenteredScrollable"
            >
              صندوق عائم متنصف عاموديًا وقابل للتمرير
            </b-button>
            <b-button
              type="button"
              class="btn btn-primary"
              toggle="modal"
              data-bs-target="#exampleModalFullscreen"
            >
              صندوق عائم يملأ الشاشة
            </b-button>
          </b-div>
        </b-div>
      </article>
      <article
        id="navs"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            التنقل
          </b-h>
          <b-a
            class="d-flex align-items-center"
            hreflang="en"
            href=""
          >
            دليل الإستخدام
          </b-a>
        </b-div>

        <b-div>
          <Nav class="nav">
            <b-a
              class="nav-link active"
              aria-current="page"
              href="#"
            >
              نشط
            </b-a>
            <b-a
              class="nav-link"
              href="#"
            >
              رابط
            </b-a>
            <b-a
              class="nav-link"
              href="#"
            >
              رابط
            </b-a>
            <b-a class="nav-link disabled">
              معطل
            </b-a>
          </Nav>



          <Nav>
            <b-div
              id="nav-tab"
              class="nav nav-tabs mb-3"
              role="tablist"
            >
              <b-button
                id="nav-home-tab"
                class="nav-link active"
                toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                الصفحة الرئيسية
              </b-button>
              <b-button
                id="nav-profile-tab"
                class="nav-link"
                toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                الملف الشخصي
              </b-button>
              <b-button
                id="nav-contact-tab"
                class="nav-link"
                toggle="tab"
                data-bs-target="#nav-contact"
                type="button"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
              >
                اتصل بنا
              </b-button>
            </b-div>
          </Nav>
          <b-div
            id="nav-tabContent"
            class="tab-content"
          >
            <b-div
              id="nav-home"
              class="tab-pane fade show active"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <b-p class="px-3">
                محتوى لتوضيح كيف يعمل التبويب. هذا المحتوى مرتبط بتبويب الصفحة الرئيسية. إذن، أمامنا بعض التحدّيات الصعبة. لكن لا يمكننا أن نعتمد على التطورات التكنولوجية وحدها في ميدان قوى السوق الحرة، لإخراجنا من هذه الورطة، لا سيّما أنها نفسها، مقرونة بالافتقار إلى البصيرة، هي التي أودت بنا إلى هذا التبدُّل المناخي في الدرجة الأولى.
              </b-p>
            </b-div>
            <b-div
              id="nav-profile"
              class="tab-pane fade"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <b-p class="px-3">
                محتوى لتوضيح كيف يعمل التبويب. هذا المحتوى مرتبط بتبويب الملف الشخصي. معظم البشر في بلدان العالَم النامي، لم يقتنوا بعد مكيّفهم الأول، والمشكلة إلى ازدياد. فمعظم البلدان النامية هي من البلدان الأشد حرارة والأكثر اكتظاظًا بالسكان في العالم.
              </b-p>
            </b-div>
            <b-div
              id="nav-contact"
              class="tab-pane fade"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
              <b-p class="px-3">
                محتوى لتوضيح كيف يعمل التبويب. هذا المحتوى مرتبط بتبويب الاتصال بنا. أمامنا بعض التحدّيات الصعبة. لكن لا يمكننا أن نعتمد على التطورات التكنولوجية وحدها في ميدان قوى السوق الحرة، بل يجب وضع معايير جدوى جديدة لشركات البناء ومعايير أعلى لجدوى التكييف من أجل تحفيز الحلول المستدامة قانونيًا.
              </b-p>
            </b-div>
          </b-div>



          <ul class="nav nav-pills">
            <li class="nav-item">
              <b-a
                class="nav-link active"
                aria-current="page"
                href="#"
              >
                نشط
              </b-a>
            </li>
            <li class="nav-item">
              <b-a
                class="nav-link"
                href="#"
              >
                رابط
              </b-a>
            </li>
            <li class="nav-item">
              <b-a
                class="nav-link"
                href="#"
              >
                رابط
              </b-a>
            </li>
            <li class="nav-item">
              <b-a class="nav-link disabled">
                معطل
              </b-a>
            </li>
          </ul>
        </b-div>
      </article>
      <article
        id="navbar"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            شريط التنقل
          </b-h>
          <b-a
            class="d-flex align-items-center"
            hreflang="en"
            href=""
          >
            دليل الإستخدام
          </b-a>
        </b-div>

        <b-div>
          <Nav class="navbar navbar-expand-lg bg-light">
            <b-div class="container-fluid">
              <b-a
                class="navbar-brand"
                href="#"
              >
                <b-img
                  width="38"
                  height="30"
                  class="d-inline-block align-top"
                  alt="Bootstrap"
                  loading="lazy"
                  style="filter: invert(1) grayscale(100%) brightness(200%);"
                />
                <!-- <b-img src="/docs//assets/brand/bootstrap-logo-white.svg" width="38" height="30" class="d-inline-block align-top" alt="Bootstrap" loading="lazy"
                    style="filter: invert(1) grayscale(100%) brightness(200%);" /> -->
              </b-a>
              <b-button
                class="navbar-toggler"
                type="button"
                toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="تبديل التنقل"
              >
                <b-span class="navbar-toggler-icon" />
              </b-button>
              <b-div
                id="navbarSupportedContent"
                class="collapse navbar-collapse"
              >
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <b-a
                      class="nav-link active"
                      aria-current="page"
                      href="#"
                    >
                      الصفحة الرئيسية
                    </b-a>
                  </li>
                  <li class="nav-item">
                    <b-a
                      class="nav-link"
                      href="#"
                    >
                      رابط
                    </b-a>
                  </li>
                  <li class="nav-item dropdown">
                    <b-a
                      id="navbarDropdown"
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      toggle="dropdown"
                      aria-expanded="false"
                    >
                      قائمة منسدلة
                    </b-a>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <b-a
                          class="dropdown-item"
                          href="#"
                        >
                          عمل
                        </b-a>
                      </li>
                      <li>
                        <b-a
                          class="dropdown-item"
                          href="#"
                        >
                          عمل آخر
                        </b-a>
                      </li>
                      <li>
                        <hr class="dropdown-b-divider">
                      </li>
                      <li>
                        <b-a
                          class="dropdown-item"
                          href="#"
                        >
                          شيء آخر هنا
                        </b-a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <b-a class="nav-link disabled">
                      معطل
                    </b-a>
                  </li>
                </ul>
                <BForm
                  class="d-flex"
                  role="search"
                >
                  <BFormInput
                    class="form-control me-2"
                    type="search"
                    placeholder="بحث"
                    aria-label="بحث"
                  />
                  <b-button
                    class="btn btn-outline-dark"
                    type="submit"
                  >
                    بحث
                  </b-button>
                </BForm>
              </b-div>
            </b-div>
          </Nav>

          <Nav class="navbar navbar-expand-lg navbar-dark bg-primary mt-5">
            <b-div class="container-fluid">
              <b-a
                class="navbar-brand"
                href="#"
              >
                <b-img
                  width="38"
                  height="30"
                  class="d-inline-block align-top"
                  alt="Bootstrap"
                  loading="lazy"
                />
                <!-- <b-img src="/docs//assets/brand/bootstrap-logo-white.svg" width="38" height="30" class="d-inline-block align-top" alt="Bootstrap" loading="lazy" /> -->
              </b-a>
              <b-button
                class="navbar-toggler"
                type="button"
                toggle="collapse"
                data-bs-target="#navbarSupportedContent2"
                aria-controls="navbarSupportedContent2"
                aria-expanded="false"
                aria-label="تبديل التنقل"
              >
                <b-span class="navbar-toggler-icon" />
              </b-button>
              <b-div
                id="navbarSupportedContent2"
                class="collapse navbar-collapse"
              >
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <b-a
                      class="nav-link active"
                      aria-current="page"
                      href="#"
                    >
                      الصفحة الرئيسية
                    </b-a>
                  </li>
                  <li class="nav-item">
                    <b-a
                      class="nav-link"
                      href="#"
                    >
                      رابط
                    </b-a>
                  </li>
                  <li class="nav-item dropdown">
                    <b-a
                      id="navbarDropdown2"
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      toggle="dropdown"
                      aria-expanded="false"
                    >
                      قائمة منسدلة
                    </b-a>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="navbarDropdown2"
                    >
                      <li>
                        <b-a
                          class="dropdown-item"
                          href="#"
                        >
                          عمل
                        </b-a>
                      </li>
                      <li>
                        <b-a
                          class="dropdown-item"
                          href="#"
                        >
                          عمل آخر
                        </b-a>
                      </li>
                      <li>
                        <hr class="dropdown-b-divider">
                      </li>
                      <li>
                        <b-a
                          class="dropdown-item"
                          href="#"
                        >
                          شيء آخر هنا
                        </b-a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <b-a class="nav-link disabled">
                      معطل
                    </b-a>
                  </li>
                </ul>
                <BForm
                  class="d-flex"
                  role="search"
                >
                  <BFormInput
                    class="form-control me-2"
                    type="search"
                    placeholder="بحث"
                    aria-label="بحث"
                  />
                  <b-button
                    class="btn btn-outline-light"
                    type="submit"
                  >
                    بحث
                  </b-button>
                </BForm>
              </b-div>
            </b-div>
          </Nav>
        </b-div>
      </article>
      <article
        id="pagination"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            ترقيم الصفحات
          </b-h>
          <b-a
            class="d-flex align-items-center"
            hreflang="en"
            href=""
          >
            دليل الإستخدام
          </b-a>
        </b-div>

        <b-div>
          <Nav aria-label="مثال ترقيم الصفحات">
            <ul class="pagination pagination-sm">
              <li class="page-item">
                <b-a
                  class="page-link"
                  href="#"
                >
                  1
                </b-a>
              </li>
              <li
                class="page-item active"
                aria-current="page"
              >
                <b-a
                  class="page-link"
                  href="#"
                >
                  2
                </b-a>
              </li>
              <li class="page-item">
                <b-a
                  class="page-link"
                  href="#"
                >
                  3
                </b-a>
              </li>
            </ul>
          </Nav>



          <Nav aria-label="مثال قياسي لترقيم الصفحات">
            <ul class="pagination">
              <li class="page-item">
                <b-a
                  class="page-link"
                  href="#"
                  aria-label="السابق"
                >
                  <b-span aria-hidden="true">
                    &laquo;
                  </b-span>
                </b-a>
              </li>
              <li class="page-item">
                <b-a
                  class="page-link"
                  href="#"
                >
                  1
                </b-a>
              </li>
              <li class="page-item">
                <b-a
                  class="page-link"
                  href="#"
                >
                  2
                </b-a>
              </li>
              <li class="page-item">
                <b-a
                  class="page-link"
                  href="#"
                >
                  3
                </b-a>
              </li>
              <li class="page-item">
                <b-a
                  class="page-link"
                  href="#"
                  aria-label="التالي"
                >
                  <b-span aria-hidden="true">
                    &raquo;
                  </b-span>
                </b-a>
              </li>
            </ul>
          </Nav>



          <Nav aria-label="مثال آخر لترقيم الصفحات">
            <ul class="pagination pagination-lg flex-wrap">
              <li class="page-item disabled">
                <b-a class="page-link">
                  السابق
                </b-a>
              </li>
              <li class="page-item">
                <b-a
                  class="page-link"
                  href="#"
                >
                  1
                </b-a>
              </li>
              <li
                class="page-item active"
                aria-current="page"
              >
                <b-a
                  class="page-link"
                  href="#"
                >
                  2
                </b-a>
              </li>
              <li class="page-item">
                <b-a
                  class="page-link"
                  href="#"
                >
                  3
                </b-a>
              </li>
              <li class="page-item">
                <b-a
                  class="page-link"
                  href="#"
                >
                  التالى
                </b-a>
              </li>
            </ul>
          </Nav>
        </b-div>
      </article>
      <article
        id="popovers"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            الصناديق المنبثقة
          </b-h>
          <b-a
            class="d-flex align-items-center"
            hreflang="en"
            href=""
          >
            دليل الإستخدام
          </b-a>
        </b-div>

        <b-div>
          <b-button
            type="button"
            class="btn btn-lg btn-danger"
            toggle="popover"
            title="عنوان الصندوق المنبثق"
            data-bs-content="وإليك بعض المحتويات الرائعة. إنه آسر للغاية. أليس كذلك؟"
          >
            انقر لعرض/إخفاء الصندوق المنبثق
          </b-button>



          <b-button
            type="button"
            class="btn btn-secondary"
            data-bs-container="body"
            toggle="popover"
            data-bs-placement="top"
            data-bs-content="نجمٌ و لكنه ليس في السماء، بل في أعماق البحار و المحيطات!"
          >
            انبثاق إلى الأعلى
          </b-button>
          <b-button
            type="button"
            class="btn btn-secondary"
            data-bs-container="body"
            toggle="popover"
            data-bs-placement="right"
            data-bs-content="نجمٌ و لكنه ليس في السماء، بل في أعماق البحار و المحيطات!"
          >
            انبثاق إلى اليسار
          </b-button>
          <b-button
            type="button"
            class="btn btn-secondary"
            data-bs-container="body"
            toggle="popover"
            data-bs-placement="bottom"
            data-bs-content="نجمٌ و لكنه ليس في السماء، بل في أعماق البحار و المحيطات!"
          >
            انبثاق إلى الأسفل
          </b-button>
          <b-button
            type="button"
            class="btn btn-secondary"
            data-bs-container="body"
            toggle="popover"
            data-bs-placement="left"
            data-bs-content="نجمٌ و لكنه ليس في السماء، بل في أعماق البحار و المحيطات!"
          >
            انبثاق إلى اليمين
          </b-button>
        </b-div>
      </article>
      <article
        id="progress"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            شريط التقدم
          </b-h>
          <b-a
            class="d-flex align-items-center"
            hreflang="en"
            href=""
          >
            دليل الإستخدام
          </b-a>
        </b-div>

        <b-div>
          <b-div class="progress mb-3">
            <b-div
              class="progress-bar"
              role="progressbar"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              0%
            </b-div>
          </b-div>
          <b-div class="progress mb-3">
            <b-div
              class="progress-bar bg-success w-25"
              role="progressbar"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              25%
            </b-div>
          </b-div>
          <b-div class="progress mb-3">
            <b-div
              class="progress-bar bg-info text-dark w-50"
              role="progressbar"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              50%
            </b-div>
          </b-div>
          <b-div class="progress mb-3">
            <b-div
              class="progress-bar bg-warning text-dark w-75"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              75%
            </b-div>
          </b-div>
          <b-div class="progress">
            <b-div
              class="progress-bar bg-danger w-100"
              role="progressbar"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              100%
            </b-div>
          </b-div>



          <b-div class="progress">
            <b-div
              class="progress-bar"
              role="progressbar"
              style="width: 15%"
              aria-valuenow="15"
              aria-valuemin="0"
              aria-valuemax="100"
            />
            <b-div
              class="progress-bar progress-bar-striped progress-bar-animated bg-success"
              role="progressbar"
              style="width: 40%"
              aria-valuenow="40"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </b-div>
        </b-div>
      </article>
      <article
        id="scrollspy"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            المخطوطة
          </b-h>
          <b-a
            class="d-flex align-items-center"
            hreflang="en"
            href=""
          >
            دليل الإستخدام
          </b-a>
        </b-div>

        <b-div>
          <b-div class="bd-example">
            <Nav
              id="navbar-example2"
              class="navbar bg-light px-3"
            >
              <b-a
                class="navbar-brand"
                href="#"
              >
                شريط التنقل
              </b-a>
              <ul class="nav nav-pills">
                <li class="nav-item">
                  <b-a
                    class="nav-link"
                    href="#fat"
                  >
                    <bdi
                      lang="en"
                      dir="ltr"
                    >@fat</bdi>
                  </b-a>
                </li>
                <li class="nav-item">
                  <b-a
                    class="nav-link"
                    href="#mdo"
                  >
                    <bdi
                      lang="en"
                      dir="ltr"
                    >@mdo</bdi>
                  </b-a>
                </li>
                <li class="nav-item dropdown">
                  <b-a
                    class="nav-link dropdown-toggle"
                    toggle="dropdown"
                    href="#"
                    role="button"
                    aria-expanded="false"
                  >
                    قائمة منسدلة
                  </b-a>
                  <ul class="dropdown-menu">
                    <li>
                      <b-a
                        class="dropdown-item"
                        href="#one"
                      >
                        واحد
                      </b-a>
                    </li>
                    <li>
                      <b-a
                        class="dropdown-item"
                        href="#two"
                      >
                        اثنان
                      </b-a>
                    </li>
                    <li>
                      <hr class="dropdown-b-divider">
                    </li>
                    <li>
                      <b-a
                        class="dropdown-item"
                        href="#three"
                      >
                        ثلاثة
                      </b-a>
                    </li>
                  </ul>
                </li>
              </ul>
            </Nav>
            <b-div
              data-bs-spy="scroll"
              data-bs-target="#navbar-example2"
              data-bs-offset="0"
              class="scrollspy-example position-relative mt-2 overflow-auto"
            >
              <b-h
                id="fat"
                level="4"
              >
                <bdi
                  lang="en"
                  dir="ltr"
                >@fat</bdi>
              </b-h>
              <b-p>محتوى لتوضيح كيف تعمل المخطوطة. ببساطة، المخطوطة عبارة عن منشور طويل يحتوي على عدة أقسام، ولديه شريط تنقل يسهل الوصول إلى هذه الأقسام الفرعية.</b-p>
              <b-h
                id="mdo"
                level="4"
              >
                <bdi
                  lang="en"
                  dir="ltr"
                >@mdo</bdi>
              </b-h>
              <b-p>بصرف النظر عن تحسيننا جدوى المكيّفات أو عدم تحسينها، فإن الطلب على الطاقة سيزداد. وطبقاً لما جاء في مقالة معهد ماساشوستس للتكنولوجيا، السالف ذكره، ثمَّة أمر يجب عدم إغفاله، وهو كيف أن هذا الطلب سيضغط على نظم توفير الطاقة الحالية. إذ لا بد من إعادة تأهيل كل شبكات الكهرباء، وتوسيعها لتلبية طلب الطاقة في زمن الذروة، خلال موجات الحرارة المتزايدة. فحين يكون الحر شديداً يجنح الناس إلى البقاء في الداخل، وإلى زيادة تشغيل المكيّفات، سعياً إلى جو لطيف وهم يستخدمون أدوات وأجهزة مختلفة أخرى.</b-p>
              <b-h
                id="one"
                level="4"
              >
                واحد
              </b-h>
              <b-p>وكل هذه الأمور المتزامنة من تشغيل الأجهزة، يزيد الضغط على شبكات الطاقة، كما أسلفنا. لكن مجرد زيادة سعة الشبكة ليس كافياً. إذ لا بد من تطوير الشبكات الذكية التي تستخدم الجسّاسات، ونظم المراقبة، والبرامج الإلكترونية، لتحديد متى يكون الشاغلون في المبنى، ومتى يكون ثمَّة حاجة إلى الطاقة، ومتى تكون الحرارة منخفضة، وبذلك يخرج الناس، فلا يستخدمون كثيراً من الكهرباء.</b-p>
              <b-h
                id="two"
                level="4"
              >
                اثنان
              </b-h>
              <b-p>مع الأسف، كل هذه الحلول المبتكرة مكلِّفة، وهذا ما يجعلها عديمة الجدوى في نظر بعض الشركات الخاصة والمواطن المتقشّف. إن بعض الأفراد الواعين بيئياً يبذلون قصارى جهدهم في تقليص استهلاكهم من الطاقة، ويعون جيداً أهمية أجهزة التكييف المجدية والأرفق بالبيئة. ولكن جهات كثيرة لن تتحرّك لمجرد حافز سلامة المناخ ووقف هدر الطاقة، ما دامت لا تحركها حوافز قانونية. وعلى الحكومات أن تُقدِم عند الاهتمام بالتغيّر المناخي، على وضع التشريعات المناسبة. فبالنظم والحوافز والدعم، يمكن دفع الشركات إلى اعتماد الحلول الأجدى في مكاتبها.</b-p>
              <b-h
                id="three"
                level="4"
              >
                ثلاثة
              </b-h>
              <b-p>وكما يتبيّن لنا، من عدد الحلول الملطِّفة للمشكلة، ومن تنوّعها، وهي الحلول التي أسلفنا الحديث عنها، فإن التكنولوجيا التي نحتاج إليها من أجل معالجة هذه التحديات، هي في مدى قدرتنا، لكنها ربما تتطلّب بعض التحسين، ودعماً استثمارياً أكبر!</b-p>
              <b-p>ولا مانع من إضافة محتوى آخر ليس تحت أي قسم معين.</b-p>
            </b-div>
          </b-div>
        </b-div>
      </article>
      <article
        id="spinners"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            الدوائر المتحركة
          </b-h>
          <b-a
            class="d-flex align-items-center"
            hreflang="en"
            href=""
          >
            دليل الإستخدام
          </b-a>
        </b-div>

        <b-div>
          <b-div
            class="spinner-border text-"
            role="status"
          >
            <b-span class="visually-hidden">
              جار التحميل...
            </b-span>
          </b-div>







          <b-div
            class="spinner-grow text-"
            role="status"
          >
            <b-span class="visually-hidden">
              جار التحميل...
            </b-span>
          </b-div>
        </b-div>
      </article>
      <article
        id="toasts"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            الإشعارات
          </b-h>
          <b-a
            class="d-flex align-items-center"
            hreflang="en"
            href=""
          >
            دليل الإستخدام
          </b-a>
        </b-div>

        <b-div>
          <b-div
            class="toast"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <b-div class="toast-header">
              <strong class="me-auto">Bootstrap</strong>
              <small class="text-muted">قبل 11 دقيقة</small>
              <b-button
                type="button"
                class="btn-close"
                data-bs-dismiss="toast"
                aria-label="قريب"
              />
            </b-div>
            <b-div class="toast-body">
              مرحبًا بالعالم! هذه رسالة إشعار.
            </b-div>
          </b-div>
        </b-div>
      </article>
      <article
        id="tooltips"
        class="mt-3 mb-5 pb-5"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            التلميحات
          </b-h>
          <b-a
            class="d-flex align-items-center"
            hreflang="en"
            href=""
          >
            دليل الإستخدام
          </b-a>
        </b-div>

        <b-div>
          <b-button
            type="button"
            class="btn btn-secondary"
            toggle="tooltip"
            data-bs-placement="top"
            title="تلميح يظهر في الأعلى"
          >
            تلميح يظهر في الأعلى
          </b-button>
          <b-button
            type="button"
            class="btn btn-secondary"
            toggle="tooltip"
            data-bs-placement="right"
            title="تلميح يظهر على اليسار"
          >
            تلميح يظهر على اليسار
          </b-button>
          <b-button
            type="button"
            class="btn btn-secondary"
            toggle="tooltip"
            data-bs-placement="bottom"
            title="تلميح يظهر في الأسفل"
          >
            تلميح يظهر في الأسفل
          </b-button>
          <b-button
            type="button"
            class="btn btn-secondary"
            toggle="tooltip"
            data-bs-placement="left"
            title="تلميح يظهر على اليمين"
          >
            تلميح يظهر على اليمين
          </b-button>
          <b-button
            type="button"
            class="btn btn-secondary"
            toggle="tooltip"
            data-bs-html="true"
            title="<em>تلميح</em> <u>مع</u> <b>HTML</b>"
          >
            تلميح مع HTML
          </b-button>
        </b-div>
      </article>
    </section>
  </b-div>

  <b-div
    id="exampleModalDefault"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <b-div class="modal-dialog">
      <b-div class="modal-content">
        <b-div class="modal-header">
          <b-h
            id="exampleModalLabel"
            level="5"
            class="modal-title"
          >
            عنوان الصندوق العائم
          </b-h>
          <b-button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="إغلاق"
          />
        </b-div>
        <b-div class="modal-body">
          ...
        </b-div>
        <b-div class="modal-footer">
          <b-button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            إغلاق
          </b-button>
          <b-button
            type="button"
            class="btn btn-primary"
          >
            حفظ التغيرات
          </b-button>
        </b-div>
      </b-div>
    </b-div>
  </b-div>
  <b-div
    id="staticBackdropLive"
    class="modal fade"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLiveLabel"
    aria-hidden="true"
  >
    <b-div class="modal-dialog">
      <b-div class="modal-content">
        <b-div class="modal-header">
          <b-h
            id="staticBackdropLiveLabel"
            level="5"
            class="modal-title"
          >
            عنوان الصندوق العائم
          </b-h>
          <b-button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="إغلاق"
          />
        </b-div>
        <b-div class="modal-body">
          <b-p>لن أغلق إذا نقرت خارجي. لا تحاول حتى الضغط على مفتاح الهروب.</b-p>
        </b-div>
        <b-div class="modal-footer">
          <b-button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            إغلاق
          </b-button>
          <b-button
            type="button"
            class="btn btn-primary"
          >
            حسنًا
          </b-button>
        </b-div>
      </b-div>
    </b-div>
  </b-div>
  <b-div
    id="exampleModalCenteredScrollable"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="exampleModalCenteredScrollableTitle"
    aria-hidden="true"
  >
    <b-div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <b-div class="modal-content">
        <b-div class="modal-header">
          <b-h
            id="exampleModalCenteredScrollableTitle"
            level="5"
            class="modal-title"
          >
            عنوان الصندوق العائم
          </b-h>
          <b-button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="إغلاق"
          />
        </b-div>
        <b-div class="modal-body">
          <b-p>نص لتوضيح عمل الصندوق العائم المتنصّف عاموديًا القابل للتمرير</b-p>
          <b-p>في هذه الحالة، هذا الصندوق يحتوي على محتوى أكثر قليلًا، ولذلك لتوضيح كيف يمكن إضافة خاصية الإنتصاف العامودي لصندوق عائم قابل للتمرير.</b-p>
          <b-p>يعتبر كوب أو فنجان القهوة عادة يومية عند غالبية سكان الكرة الأرضية في الصباح والمساء، وفي حين تكثر الدراسات حول إيجابياتها هناك أيضا سلبيات كثيرة للمشروب المفضل للكثيرين.</b-p>
          <b-p>وفي هذا الشأن، أظهرت دراسة جديدة أن تناول الكافيين بانتظام يقلل من حجم المادة الرمادية في الدماغ، مما يشير إلى أن تناول القهوة يمكن أن يضعف القدرة على معالجة المعلومات، وفقاً لما نشرته "ديلي ميل" البريطانية.</b-p>
          <b-p>وأعطى باحثون سويسريون متطوعين ثلاث حصص من الكافيين 150 ملغم يوميًا لمدة 10 أيام - وهو مقدار كافيين يعادل حوالي أربعة أو خمسة أكواب صغيرة من القهوة المخمرة يوميًا، أو سبعة إسبريسو فردي.</b-p>
          <b-p>وتبين حدوث انخفاض في المادة الرمادية، والتي توجد غالبًا في الطبقة الخارجية للدماغ، أو القشرة، وتعمل على معالجة المعلومات.</b-p>
          <b-p>كما كان الانخفاض مذهلاً بشكل خاص في الفص الصدغي الإنسي الأيمن، بما في ذلك الحُصين، وهي منطقة من الدماغ ضرورية لتقوية الذاكرة.</b-p>
        </b-div>
        <b-div class="modal-footer">
          <b-button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            إغلاق
          </b-button>
          <b-button
            type="button"
            class="btn btn-primary"
          >
            حفظ التغيرات
          </b-button>
        </b-div>
      </b-div>
    </b-div>
  </b-div>
  <b-div
    id="exampleModalFullscreen"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="exampleModalFullscreenLabel"
    aria-hidden="true"
  >
    <b-div class="modal-dialog modal-fullscreen">
      <b-div class="modal-content">
        <b-div class="modal-header">
          <b-h
            id="exampleModalFullscreenLabel"
            level="5"
            class="modal-title h4"
          >
            صندوق عائم يملأ الشاشة
          </b-h>
          <b-button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="إغلاق"
          />
        </b-div>
        <b-div class="modal-body">
          <b-p>في ما يلي، نص طويل لتعبئة كامل الشاشة. قد يبدو أنني أثرثر كثيرًا، لذا سأقوم بنسخ مقالة من إحدى الصحف العربية.</b-p>
          <b-p>تكييف الهواء هو من التكنولوجيا التي ما إن نمتلكها حتى نصبح عاجزين عن تخيّل العيش من دونها. وتكييف الهواء في مناطق عديدة من العالم ليس ترفاً يمكن الاستغناء عنه. ولكن هذه الحاجة الحيوية تثير تحديات كبيرة على مستوى استهلاك الطاقة في معظم بلدان العالم. ويُتوقع أن تتفاقم هذه التحديات خلال العقود الثلاثة المقبلة، مع توقُّع ارتفاع عدد المكيفات في العالم نحو ثلاثة أضعاف. وفي حين أن الابتكارات التكنولوجية تحقِّق كل يوم إنجازاً جديداً، وعلى الرغم من بعض التحسينات والتدابير المحدودة التي طرأت على صناعة المكيفات، “فإن تكنولوجيتها الأساسية لا تزال تعمل كما كانت، منذ اعتمادها قبل نحو قرن من السنين"، حسبما جاء في تقرير لمعهد ماساشوستس للتكنولوجيا (MIT)، في الأول من سبتمبر 2020م. ولمعالجة هذه المشكلات الخطيرة، لا مفر من إعادة التفكير بجد.</b-p>
          <b-p>التكييف حاجة حيويّة. فالتعرّض للحرارة لمدة طويلة ضارٌ بالصحة. ووفقاً لمنظمة الصحة العالميّة يمكن للتعرُّض الطويل للحرارة أيضاً أن يؤدي إلى "إعياء حراري، وضربة شمس، وتورّم في الرجلين، وطفح جلدي على العنق، وتشنج، وصداع، وحساسيّة، والخمول والوهَن. ويمكن للحرارة أن تسبِّب جفافاً خطراً، وأعراضاً حادة في أوعية الدماغ الدمويّة، وتسهم في تكوّن الجلطات".</b-p>
          <b-p>وموجات الحر أيضاً من أشد المخاطر الطبيعيّة المميتة. إذ يقدَّر أن بين عامي 1998 و2017م، توفي نحو 166 ألف شخص من موجات الحر. ومات 70 ألفاً من هؤلاء في أوروبا سنة 2003م وحدها. ومن دون أن يصل الخطر إلى الموت، تتسبَّب الحرارة العالية بانخفاض الأداء المعرفي لدى الشبان البالغين في المباني غير المكيّفة. فقد بيّنت دراسة أجرتها "كليّة ت. هـ. تشان" للصحة العامة في جامعة هارفرد، نشرتها "بلوس ميديسين" في 10 يوليو 2018م، أن التلاميذ الذين ينامون في مهاجع غير مكيّفة، يقل أداؤهم عن أولئك الذين ينامون في مهاجع مكيّفة. ولتجنّب مخاطر التعرّض للحرارة، يلتفت الناس إلى استخدام التكييف.</b-p>
          <b-p>يتطلّب التكييف كثيراً من الطاقة. فنحو %10 من استهلاك الكهرباء في العالم يُنفَق في تشغيل المكيّفات. وتصل هذه النسبة إلى %50 في المملكة حسب "المركز السعودي لكفاءة الطاقة". أضف إلى ذلك أن معظم البشر في بلدان العالم النامي، لم يقتنوا بعد مكيّفهم الأول، والمشكلة إلى ازدياد. فمعظم البلدان النامية هي من البلدان الأشد حرارة والأكثر اكتظاظاً بالسكان في العالم. وجاء في تقرير لوكالة الطاقة الدوليّة بعنوان "مستقبل التبريد"، ونُشر في مايو 2018م، أن في أجزاء من أمريكا الجنوبيّة وإفريقيا وآسيا والشرق الأوسط، يعيش 2.8 مليار نسمة، ولا يملك وحدات تكييف سوى %8 من المنازل. في حين الدول المتقدِّمة مثل كوريا الجنوبيّة، واليابان، والولايات المتحدة، فإن %89 من المنازل تملك مكيفات، وفي الصين %60 من البيوت تملكها أيضاً.</b-p>
          <b-p>ولكن مع تنامي الدخل في بلدان الاقتصاد الصاعد، يتوقّع أن تزداد المنازل التي تقتني مكيّفاً. وبحسب مقالة نُشرت في صحيفة "نيويورك تايمز"، في 15 مايو 2018م، سيرتفع عدد المكيّفات في العالم من نحو 1.6 مليار حالياً، إلى 5.6 مليارات عام 2050م، طبقاً لمعدَّلات النمو الاقتصادي.</b-p>
          <b-p>ومع الافتقار إلى الابتكار وتطوير النظم لفرض معايير الجدوى الأعلى، فسيتضاعف استهلاك الطاقة لتشغيل المكيّفات ثلاثة أضعاف. وسينتج من ذلك طلب إضافي للطاقة يساوي مجموع إنتاج الطاقة في الصين حالياً. فمبيعات المكيّفات ترتفع اليوم في البلدان النامية، لكن فعاليّة هذه الوحدات مشكوك فيها. فمثلاً، أوسع وحدات التكييف انتشاراً في بعض الأسواق الآسيوية تتطلّب ضعفي ما تتطلّبه وحدات تكييف أجدى. والمكيّفات التي تباع في اليابان والاتحاد الأوروبي أجدى بنسبة %25 عادة، من تلك التي تباع في الصين والولايات المتحدة.</b-p>
          <b-p>وبصرف النظر عن كثير من الطاقة التي يحتاج إليها المكيّف، فإنه يبث مقادير وفيرة من غازات الدفيئة نفسها. وطبقاً لموقع تكييف الهواء (airconditioning.com)، فإن المبرِّدات في معظم المكيّفات مثل مواد مركبات الكربون الكلورية فلورية أو مواد هيدروفلوروولفينات، ومركبات ثاني أكسيد الكربون الهيدروكلورية فلورية، أسوأ بكثير للبيئة من ثاني أكسيد الكربون، لأنها تحتبس من الحرارة مقادير أكبر حين تتسرّب إلى الجو.</b-p>
          <b-p>وبالإضافة إلى ظاهرة الدفيئة، فهذه الغازات تسهم أيضاً بالإضرار بطبقة الأوزون. ويمكن لهذه المواد الكيميائية أن تتسرّب خلال عملية التصنيع أو التصليح. ويعرف كل من يملك في منزله مكيّفاً كم تتكرر أعطال هذه الأجهزة. ثم إن المكيف يُرمَى حين يتعطّل نهائياً ولا يعود قابلاً للإصلاح، والمواد المبرِّدة فيه ستتسرّب على الأرجح لتلوث الهواء.</b-p>
        </b-div>
        <b-div class="modal-footer">
          <b-button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            إغلاق
          </b-button>
        </b-div>
      </b-div>
    </b-div>
  </b-div>
</template>
<style scoped>
.theme-default-content:not(.custom) {
  max-width: none;
}
</style>
 <!-- <script>
   import './cheatsheet.rtl.css'
   import './cheatsheet.js'
 </script> -->