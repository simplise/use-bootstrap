<template>
  <Carousel
    dark
    control
    indicators
  >
    <CarouselInner>
      <CarouselItem>
        <CarouselItemImage
          width="800"
          src="https://source.unsplash.com/random/1920x1080?sig=1"
        />
        <CarouselCaption>
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </CarouselCaption>
      </CarouselItem>
      <CarouselItem>
        <CarouselItemImage
          width="800"
          src="https://source.unsplash.com/random/1920x1080?sig=2"
        />
        <CarouselCaption>
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </CarouselCaption>
      </CarouselItem>
      <CarouselItem>
        <CarouselItemImage
          width="800"
          src="https://source.unsplash.com/random/1920x1080?sig=3"
        />
        <CarouselCaption>
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </CarouselCaption>
      </CarouselItem>
    </CarouselInner>
  </Carousel>
</template>
