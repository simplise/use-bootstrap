<script setup lang="ts">
definePageMeta({
  layout: 'examples',
  title: ``,
  description: ``
})
</script>

<template>
  <Container>
    <main>
      <b-div class="mt-5 py-5 text-center">
        <!-- <b-img class="d-block mx-auto mb-4" src="/docs/{{< param docs_version >}}/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> -->
        <b-h level="2">
          نموذج إتمام الشراء
        </b-h>
        <b-p class="lead">
          فيما يلي مثال على نموذج تم إنشاؤه بالكامل باستخدام عناصر تحكم النموذج في Bootstrap. لكل مجموعة نماذج مطلوبة حالة تحقق يمكن تشغيلها بمحاولة إرسال النموذج دون استكماله.
        </b-p>
      </b-div>

      <b-div class="row g-3">
        <b-div class="col-md-5 col-lg-4 order-md-last">
          <b-h
            level="4"
            class="d-flex justify-content-between align-items-center mb-3"
          >
            <b-span class="text-muted">
              عربة التسوق
            </b-span>
            <b-span class="badge bg-secondary rounded-pill">
              3
            </b-span>
          </b-h>
          <ul class="list-group mb-3">
            <li class="list-group-item d-flex justify-content-between lh-sm">
              <b-div>
                <b-h
                  level="6"
                  class="my-0"
                >
                  اسم المنتج
                </b-h>
                <small class="text-muted">وصف مختصر</small>
              </b-div>
              <b-span class="text-muted">
                $12
              </b-span>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-sm">
              <b-div>
                <b-h
                  level="6"
                  class="my-0"
                >
                  المنتج الثاني
                </b-h>
                <small class="text-muted">وصف مختصر</small>
              </b-div>
              <b-span class="text-muted">
                $8
              </b-span>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-sm">
              <b-div>
                <b-h
                  level="6"
                  class="my-0"
                >
                  البند الثالث
                </b-h>
                <small class="text-muted">وصف مختصر</small>
              </b-div>
              <b-span class="text-muted">
                $5
              </b-span>
            </li>
            <li class="list-group-item d-flex justify-content-between bg-light">
              <b-div class="text-success">
                <b-h
                  level="6"
                  class="my-0"
                >
                  رمز ترويجي
                </b-h>
                <small>EXAMPLECODE</small>
              </b-div>
              <b-span class="text-success">
                -$5
              </b-span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <b-span>مجموع (USD)</b-span>
              <strong>$20</strong>
            </li>
          </ul>

          <BForm class="card p-2">
            <b-div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="رمز ترويجي"
              >
              <b-button
                type="submit"
                class="btn btn-secondary"
              >
                تحقق
              </b-button>
            </b-div>
          </BForm>
        </b-div>
        <b-div class="col-md-7 col-lg-8">
          <b-h
            level="4"
            class="mb-3"
          >
            عنوان الفوترة
          </b-h>
          <BForm
            class="needs-validation"
            novalidate
          >
            <b-div class="row g-3">
              <b-div class="col-sm-6">
                <label
                  for="firstName"
                  class="form-label"
                >الاسم الأول</label>
                <input
                  id="firstName"
                  type="text"
                  class="form-control"
                  placeholder=""
                  value=""
                  required
                >
                <b-div class="invalid-feedback">
                  يرجى إدخال اسم أول صحيح.
                </b-div>
              </b-div>

              <b-div class="col-sm-6">
                <label
                  for="lastName"
                  class="form-label"
                >اسم العائلة</label>
                <input
                  id="lastName"
                  type="text"
                  class="form-control"
                  placeholder=""
                  value=""
                  required
                >
                <b-div class="invalid-feedback">
                  يرجى إدخال اسم عائلة صحيح.
                </b-div>
              </b-div>

              <b-div class="col-12">
                <label
                  for="username"
                  class="form-label"
                >اسم المستخدم</label>
                <b-div class="input-group has-validation">
                  <b-span class="input-group-text">
                    @
                  </b-span>
                  <input
                    id="username"
                    type="text"
                    class="form-control"
                    placeholder="اسم المستخدم"
                    required
                  >
                  <b-div class="invalid-feedback">
                    اسم المستخدم الخاص بك مطلوب.
                  </b-div>
                </b-div>
              </b-div>

              <b-div class="col-12">
                <label
                  for="email"
                  class="form-label"
                >البريد الإلكتروني <b-span class="text-muted">(اختياري)</b-span></label>
                <input
                  id="email"
                  type="email"
                  class="form-control"
                  placeholder="you@example.com"
                >
                <b-div class="invalid-feedback">
                  يرجى إدخال عنوان بريد إلكتروني صحيح لتصلكم تحديثات الشحن.
                </b-div>
              </b-div>

              <b-div class="col-12">
                <label
                  for="address"
                  class="form-label"
                >العنوان</label>
                <input
                  id="address"
                  type="text"
                  class="form-control"
                  placeholder="1234 الشارع الأول"
                  required
                >
                <b-div class="invalid-feedback">
                  يرجى إدخال عنوان الشحن الخاص بك.
                </b-div>
              </b-div>

              <b-div class="col-12">
                <label
                  for="address2"
                  class="form-label"
                >عنوان 2 <b-span class="text-muted">(اختياري)</b-span></label>
                <input
                  id="address2"
                  type="text"
                  class="form-control"
                  placeholder="شقة 24"
                >
              </b-div>

              <b-div class="col-md-5">
                <label
                  for="country"
                  class="form-label"
                >البلد</label>
                <select
                  id="country"
                  class="form-select"
                  required
                >
                  <option value="">
                    اختر...
                  </option>
                  <option>الولايات المتحدة الأمريكية</option>
                </select>
                <b-div class="invalid-feedback">
                  يرجى اختيار بلد صحيح.
                </b-div>
              </b-div>

              <b-div class="col-md-4">
                <label
                  for="state"
                  class="form-label"
                >المنطقة</label>
                <select
                  id="state"
                  class="form-select"
                  required
                >
                  <option value="">
                    اختر...
                  </option>
                  <option>كاليفورنيا</option>
                </select>
                <b-div class="invalid-feedback">
                  يرجى اختيار اسم منطقة صحيح.
                </b-div>
              </b-div>

              <b-div class="col-md-3">
                <label
                  for="zip"
                  class="form-label"
                >الرمز البريدي</label>
                <input
                  id="zip"
                  type="text"
                  class="form-control"
                  placeholder=""
                  required
                >
                <b-div class="invalid-feedback">
                  الرمز البريدي مطلوب.
                </b-div>
              </b-div>
            </b-div>

            <hr class="my-4">

            <b-div class="form-check">
              <input
                id="same-address"
                type="checkbox"
                class="form-check-input"
              >
              <label
                class="form-check-label"
                for="same-address"
              >عنوان الشحن هو نفس عنوان الفوترة الخاص بي</label>
            </b-div>

            <b-div class="form-check">
              <input
                id="save-info"
                type="checkbox"
                class="form-check-input"
              >
              <label
                class="form-check-label"
                for="save-info"
              >احفظ هذه المعلومات في المرة القادمة</label>
            </b-div>

            <hr class="my-4">

            <b-h
              level="4"
              class="mb-3"
            >
              طريقة الدفع
            </b-h>

            <b-div class="my-3">
              <b-div class="form-check">
                <input
                  id="credit"
                  name="paymentMethod"
                  type="radio"
                  class="form-check-input"
                  checked
                  required
                >
                <label
                  class="form-check-label"
                  for="credit"
                >بطاقة ائتمان</label>
              </b-div>
              <b-div class="form-check">
                <input
                  id="cash"
                  name="paymentMethod"
                  type="radio"
                  class="form-check-input"
                  required
                >
                <label
                  class="form-check-label"
                  for="cash"
                >نقد</label>
              </b-div>
              <b-div class="form-check">
                <input
                  id="paypal"
                  name="paymentMethod"
                  type="radio"
                  class="form-check-input"
                  required
                >
                <label
                  class="form-check-label"
                  for="paypal"
                >PayPal</label>
              </b-div>
            </b-div>

            <b-div class="row gy-3">
              <b-div class="col-md-6">
                <label
                  for="cc-name"
                  class="form-label"
                >الاسم على البطاقة</label>
                <input
                  id="cc-name"
                  type="text"
                  class="form-control"
                  placeholder=""
                  required
                >
                <small class="text-muted">الاسم الكامل كما هو معروض على البطاقة</small>
                <b-div class="invalid-feedback">
                  الاسم على البطاقة مطلوب
                </b-div>
              </b-div>

              <b-div class="col-md-6">
                <label
                  for="cc-number"
                  class="form-label"
                >رقم البطاقة</label>
                <input
                  id="cc-number"
                  type="text"
                  class="form-control"
                  placeholder=""
                  required
                >
                <b-div class="invalid-feedback">
                  رقم بطاقة الائتمان مطلوب
                </b-div>
              </b-div>

              <b-div class="col-md-3">
                <label
                  for="cc-expiration"
                  class="form-label"
                >تاريخ انتهاء الصلاحية</label>
                <input
                  id="cc-expiration"
                  type="text"
                  class="form-control"
                  placeholder=""
                  required
                >
                <b-div class="invalid-feedback">
                  تاريخ انتهاء الصلاحية مطلوب
                </b-div>
              </b-div>

              <b-div class="col-md-3">
                <label
                  for="cc-cvv"
                  class="form-label"
                >الرمز الثلاثي (CVV)</label>
                <input
                  id="cc-cvv"
                  type="text"
                  class="form-control"
                  placeholder=""
                  required
                >
                <b-div class="invalid-feedback">
                  رمز الحماية مطلوب
                </b-div>
              </b-div>
            </b-div>

            <hr class="my-4">

            <b-button
              class="w-100 btn btn-primary btn-lg"
              type="submit"
            >
              الاستمرار بالدفع
            </b-button>
          </BForm>
        </b-div>
      </b-div>
    </main>
    <footer class="my-5 pt-5 text-muted text-center text-small">
      <b-p class="mb-1">
        &copy; 2017 اسم الشركة
      </b-p>
      <!-- <b-p class="mb-1">&copy; {{< year >}}-2017 اسم الشركة</b-p> -->
      <ul class="list-inline">
        <li class="list-inline-item">
          <b-a href="#">
            سياسة الخصوصية
          </b-a>
        </li>
        <li class="list-inline-item">
          <b-a href="#">
            اتفاقية الاستخدام
          </b-a>
        </li>
        <li class="list-inline-item">
          <b-a href="#">
            الدعم الفني
          </b-a>
        </li>
      </ul>
    </footer>
  </Container>
</template>
<style scoped>
.theme-default-content:not(.custom) {
  max-width: none;
}
</style>