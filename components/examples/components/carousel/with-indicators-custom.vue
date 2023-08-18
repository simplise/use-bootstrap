<template>
  <Carousel>
    <CarouselIndicators>
      <CarouselIndicatorsButton slide-to="0" />
      <CarouselIndicatorsButton slide-to="1" />
      <CarouselIndicatorsButton slide-to="2" />
    </CarouselIndicators>
    <CarouselInner>
      <CarouselItem>
        <CarouselItemImage
          width="800"
          src="https://source.unsplash.com/random/1920x1080?sig=1"
        />
      </CarouselItem>
      <CarouselItem>
        <CarouselItemImage
          width="800"
          src="https://source.unsplash.com/random/1920x1080?sig=2"
        />
      </CarouselItem>
      <CarouselItem>
        <CarouselItemImage
          width="800"
          src="https://source.unsplash.com/random/1920x1080?sig=3"
        />
      </CarouselItem>
    </CarouselInner>
    <CarouselControl slide="prev" />
    <CarouselControl slide="next" />
  </Carousel>
</template>
