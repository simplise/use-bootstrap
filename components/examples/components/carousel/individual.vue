<template>
  <Carousel
    control
    indicators
  >
    <CarouselInner>
      <CarouselItem interval="10000">
        <CarouselItemImage
          width="800"
          src="https://source.unsplash.com/random/1920x1080?sig=1"
        />
      </CarouselItem>
      <CarouselItem interval="2000">
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
  </Carousel>
</template>
