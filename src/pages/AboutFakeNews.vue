<template>
  <q-page>
    <div class="row">
      <div class="barra col-md-1"></div>
      <div class="col-md-6 column items-start justify-center q-ml-xl">
        <div class="headerBlock">
          <span
            >Sobre <br />
            Noticias Falsas</span
          >
        </div>
        <div class="blockText">
          <span
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
            ut dolor veritatis iste doloribus quisquam corrupti laborum unde
            deleniti, ipsum quod iusto eaque quas officiis perspiciatis, itaque
            ad fugit. Esse.</span
          >
        </div>
      </div>
      <div class="col-md-5"><q-img src="../assets/fakenews5.png" /></div>
    </div>

    <div class="row">
      <div style="max-width: 901px" class="container">
        <div
          style="
            background-color: rgba(14, 6, 114, 1);
            width: 70px;
            height: 8px;
          "
        ></div>
        <div>
          <span style="font-weight: 400; font-size: 48px"
            >¿Aprendiste algo nuevo?</span
          >
        </div>
        <div>
          <span
            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            corrupti quis voluptatum quam aliquid optio a sint perferendis!
            Labore natus facere itaque officiis, nisi repellendus sed sapiente
            accusantium numquam eum!</span
          >
          <div>
            <q-img width="901px" height="334" src="../assets/fakenews6.png" />
          </div>
          <div>
            <span
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              debitis quo aliquid sapiente praesentium. Hic saepe voluptatum at
              quos reprehenderit nihil ipsa natus repellendus voluptatem illo,
              neque tempore quam blanditiis.
            </span>
          </div>
          <div style="color: rgba(14, 6, 114, 1)">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
            tenetur impedit dicta expedita minus voluptatum obcaecati enim eaque
            tempora? Dolores ex laborum ad soluta libero repellat excepturi eius
            suscipit cupiditate?
          </div>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
            tenetur impedit dicta expedita minus voluptatum obcaecati enim eaque
            tempora? Dolores ex laborum ad soluta libero repellat excepturi eius
            suscipit cupiditate?
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "AboutFakeNews",
};
</script>

<style scoped>
.barra {
  background: rgba(14, 6, 114, 1);
  height: 564px;
  width: 58px;
}

.blockText {
  max-width: 599px;
}

.blockText span {
  word-wrap: break-word;
}

.headerBlock {
  font-weight: 400;
  font-size: 64px;
}

.container {
  margin: auto;
}
</style>

