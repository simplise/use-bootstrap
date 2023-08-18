<script setup lang="ts">
definePageMeta({
  layout: 'examples',
  title: ``,
  description: ``
})
</script>
<template>
  <header>
    <Nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <b-div class="container-fluid">
        <b-a
          class="navbar-brand"
          href="#"
        >
          شرائح العرض
        </b-a>
        <b-button
          class="navbar-toggler"
          type="button"
          toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="تبديل التنقل"
        >
          <b-span class="navbar-toggler-icon" />
        </b-button>
        <b-div
          id="navbarCollapse"
          class="collapse navbar-collapse"
        >
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
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
                حلقة الوصل
              </b-a>
            </li>
            <li class="nav-item">
              <b-a class="nav-link disabled">
                رابط غير مفعل
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
              class="btn btn-outline-success"
              type="submit"
            >
              بحث
            </b-button>
          </BForm>
        </b-div>
      </b-div>
    </Nav>
  </header>

  <main class="mt-5">
    <p><br></p>
    <b-div
      id="myCarousel"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <b-div class="carousel-indicators">
        <b-button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <b-button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        />
        <b-button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        />
      </b-div>
      <b-div class="carousel-inner">
        <b-div class="carousel-item active">
          <b-div
            width="100%"
            height="100%"
            background="#777"
            color="#777"
            text="false"
            title="false"
          />
          <Container>
            <b-div class="carousel-caption text-start">
              <b-h level="1">
                عنوان المثال.
              </b-h>
              <b-p>تشير الدراسات الإحصائية حسب الجمعية الأمريكية للغات بأن الإقبال على العربية زاد %126 في الولايات المتحدة الأمريكية وحدها بين عامي 2002 و2009م.</b-p>
              <b-p>
                <b-a
                  class="btn btn-lg btn-primary"
                  href="#"
                >
                  سجل اليوم
                </b-a>
              </b-p>
            </b-div>
          </Container>
        </b-div>
        <b-div class="carousel-item">
          <b-div
            width="100%"
            height="100%"
            background="#777"
            color="#777"
            text="false"
            title="false"
          />
          <Container>
            <b-div class="carousel-caption">
              <b-h level="1">
                عنوان مثال آخر.
              </b-h>
              <b-p>حسب المجلس الثقافي البريطاني فإن تعليم الإنجليزية داخل بريطانيا يسهم في تعزيز اقتصادها بما يتجاوز ملياري جنيه سنوياً، كما أنه وفر أكثر من 26 ألف وظيفة.</b-p>
              <b-p>
                <b-a
                  class="btn btn-lg btn-primary"
                  href="#"
                >
                  أعرف أكثر
                </b-a>
              </b-p>
            </b-div>
          </Container>
        </b-div>
        <b-div class="carousel-item">
          <b-div
            width="100%"
            height="100%"
            background="#777"
            color="#777"
            text="false"
            title="false"
          />
          <Container>
            <b-div class="carousel-caption text-end">
              <b-h level="1">
                واحد أكثر لقياس جيد.
              </b-h>
              <b-p>الإحصاءات لحجم الاستثمار اللغوي خارج بريطانيا تتفاوت من سنة لأخرى إلا أن المدير التنفيذي للمجلس الثقافي البريطاني إدي بايرز يرى أن استثمار تعليم الإنجليزية في الخارج لا يحسب على المستوى المالي فحسب بل على المستوى السياسي أيضاً.</b-p>
              <b-p>
                <b-a
                  class="btn btn-lg btn-primary"
                  href="#"
                >
                  تصفح المعرض
                </b-a>
              </b-p>
            </b-div>
          </Container>
        </b-div>
      </b-div>
      <b-button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
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
        data-bs-target="#myCarousel"
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


    <!-- Marketing messaging and featurettes
    ================================================== -->
    <!-- Wrap the rest of the page in another container to center all the content. -->

    <b-div class="container marketing">
      <!-- Three columns of text below the carousel -->
      <b-div class="row">
        <b-div class="col-lg-4">
          <b-div
            width="140"
            height="140"
            background="#777"
            color="#777"
            class="rounded-circle"
          />
          <b-h
            level="2"
            class="fw-normal"
          >
            عنوان
          </b-h>
          <b-p>تذكر دائماً أن الحاسوب لا يمتلك ذكاءً، ولكنه يكتسب الذكاء الاصطناعي من خلال ثلاثة عناصر وظيفية رئيسة، هي: القدرة على التحليل، والقدرة على التأليف، والاستدلال المنطقي.</b-p>
          <b-p>
            <b-a
              class="btn btn-secondary"
              href="#"
            >
              عرض التفاصيل
            </b-a>
          </b-p>
        </b-div><!-- /.col-lg-4 -->
        <b-div class="col-lg-4">
          <b-div
            width="140"
            height="140"
            background="#777"
            color="#777"
            class="rounded-circle"
          />
          <b-h
            level="2"
            class="fw-normal"
          >
            عنوان آخر
          </b-h>
          <b-p>إذا أردنا استخدام الحاسوب الذكي في معالجة اللغة العربية فإننا نجد أنفسنا أمام تحدٍّ كبير، خاصة وأن لغتنا تمتاز بتماسك منظوماتها وتداخلها، ومع ذلك فإن الذكاء الاصطناعي يمكّننا من الحصول على أربعة أنواع من المعالجة، هي: المعالجة الصوتية، والمعالجة الصرفية، والمعالجة النحوية، والمعالجة الدلالية.</b-p>
          <b-p>
            <b-a
              class="btn btn-secondary"
              href="#"
            >
              عرض التفاصيل
            </b-a>
          </b-p>
        </b-div><!-- /.col-lg-4 -->
        <b-div class="col-lg-4">
          <b-div
            width="140"
            height="140"
            background="#777"
            color="#777"
            class="rounded-circle"
          />
          <b-h
            level="2"
            class="fw-normal"
          >
            عنوان ثالث لتأكيد المعلومة
          </b-h>
          <b-p>بفضل بحوث الذكاء الاصطناعي وتقنياته استطعنا الانتقال من مرحلة التعامل مع الفيزيائي إلى مرحلة التعامل مع المنطقي، وقد انعكس هذا الانتقال بصورة إيجابية على الكيفية التي تتعامل بها الشعوب مع لغاتها الحيَّة، وهذا يعني أنه يجب أن ينعكس بصورة إيجابية على كيفية تعاملنا مع لغتنا العربية.</b-p>
          <b-p>
            <b-a
              class="btn btn-secondary"
              href="#"
            >
              عرض التفاصيل
            </b-a>
          </b-p>
        </b-div><!-- /.col-lg-4 -->
      </b-div><!-- /.row -->


      <!-- START THE FEATURETTES -->

      <hr class="featurette-b-divider">

      <b-div class="row featurette">
        <b-div class="col-md-7">
          <b-h
            level="2"
            class="featurette-heading fw-normal lh-1"
          >
            العنوان الأول المميز. <b-span class="text-muted">
              سيذهل عقلك.
            </b-span>
          </b-h>
          <b-p class="lead">
            وجه الإنسان هو جزء معقَّد ومتميِّز للغاية من جسمه. وفي الواقع، إنه أحد أكثر أنظمة الإشارات المتاحة تعقيداً لدينا؛ فهو يتضمَّن أكثر من 40 عضلة مستقلة هيكلياً ووظيفياً، بحيث يمكن تشغيل كل منها بشكل مستقل عن البعض الآخر؛ وتشكِّل أحد أقوى مؤشرات العواطف.
          </b-p>
        </b-div>
        <b-div class="col-md-5">
          <b-div
            width="500"
            height="500"
            background="#eee"
            color="#aaa"
            class="bd-placeholder-img-lg featurette-image img-fluid mx-auto"
          />
        </b-div>
      </b-div>

      <hr class="featurette-b-divider">

      <b-div class="row featurette">
        <b-div class="col-md-7 order-md-2">
          <b-h
            level="2"
            class="featurette-heading fw-normal lh-1"
          >
            أوه نعم، هذا جيد. <b-span class="text-muted">
              شاهد بنفسك.
            </b-span>
          </b-h>
          <b-p class="lead">
            عندما نضحك أو نبكي، فإننا نعرض عواطفنا، مما يسمح للآخرين بإلقاء نظرة خاطفة على أذهاننا أثناء "قراءة" وجوهنا بناءً على التغييرات في مكوّنات الوجه الرئيسة، مثل: العينين والحاجبين والجفنين والأنف والشفتين.
          </b-p>
        </b-div>
        <b-div class="col-md-5 order-md-1">
          <b-div
            width="500"
            height="500"
            background="#eee"
            color="#aaa"
            class="bd-placeholder-img-lg featurette-image img-fluid mx-auto"
          />
        </b-div>
      </b-div>

      <hr class="featurette-b-divider">

      <b-div class="row featurette">
        <b-div class="col-md-7">
          <b-h
            level="2"
            class="featurette-heading fw-normal lh-1"
          >
            وأخيرًا، هذا. <b-span class="text-muted">
              كش ملك.
            </b-span>
          </b-h>
          <b-p class="lead">
            إن جميع العضلات في أجسامنا مدعمة بالأعصاب المتصلة من كافة أنحاء الجسم بالنخاع الشوكي والدماغ. وهذا الاتصال العصبي هو ثنائي الاتجاه، أي إن العصب يتسبَّب في تقلصات العضلات بناءً على إشارات الدماغ، ويقوم في الوقت نفسه بإرسال معلومات عن حالة العضلات إلى الدماغ
          </b-p>
        </b-div>
        <b-div class="col-md-5">
          <b-div
            width="500"
            height="500"
            background="#eee"
            color="#aaa"
            class="bd-placeholder-img-lg featurette-image img-fluid mx-auto"
          />
        </b-div>
      </b-div>

      <hr class="featurette-b-divider">

      <!-- /END THE FEATURETTES -->
    </b-div><!-- /.container -->


    <!-- FOOTER -->
    <footer class="container">
      <b-p class="float-end">
        <b-a href="#">
          عد إلى الأعلى
        </b-a>
      </b-p>
      <b-p>
        &copy; 2017 Company, Inc. &middot; <b-a href="#">
          سياسة الخصوصية
        </b-a> &middot; <b-a href="#">
          شروط الاستخدام
        </b-a>
      </b-p>
      <!-- <b-p>&copy; 2017–{{< year >}} Company, Inc. &middot; <b-a href="#">سياسة الخصوصية</b-a> &middot; <b-a href="#">شروط الاستخدام</b-a></b-p> -->
    </footer>
  </main>
</template>
 
<style scoped>
.theme-default-content:not(.custom) {
  max-width: none;
}
</style>