<template>
  <div class="footer row">
    <div class="footer__left col-md-6 col-12">
      <span class="footer__left-text">¿Aprendiste algo nuevo?</span>
      <span class="footer__left-text-body"
        >Si te gusto este contenido y crees que le pueda servir a alguien mas,
        no dudes en compartirlo con tus conocidos y amigos!
      </span>
    </div>
    <div class="footer__right col-md-6 col-12">
      <q-img class="footer_right-img" src="../assets/fakenews4.png" />
    </div>
  </div>
</template>

<style scoped>
.footer {
  width: 150rem;
  height: 30rem;
  margin: 15rem 0;
}

.footer__left {
  background-color: rgba(14, 6, 114, 1);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.footer__right {
  background-color: blueviolet;
}

.footer__left-text {
  font-weight: 400;
  font-size: 48px;
  margin: auto auto 0 auto;
}

.footer__left-text-body {
  font-size: 24px;
  width: 32rem;
  margin: 0 auto auto 7.7rem;
}
</style>

<!-- <template>
  <div class="row q-mb-xl">
    <div
      class="col-12 col-md-6 containerInfo column items-center justify-center"
    >
      <div>
        <span class="headerTextContainer">¿Aprendiste algo nuevo?</span>
      </div>
      <div>
        <span
          >Si te gusto este contenido y crees que le pueda servir a alguien mas,
          no dudes en compartirlo con tus conocidos y amigos!
        </span>
      </div>
    </div>
    <div>
      <q-img class="col-md-6" src="../assets/fakenews4.png" />
    </div>
  </div>
</template>


<style scoped>
.containerInfo {
  background-color: rgb(14, 6, 114, 1);
  width: 679px;
  height: 511px;
}

.containerInfo span {
  color: white;
}

.headerTextContainer {
  font-weight: 400;
  font-size: 40px;
}

.q-img {
  width: 714px;
  height: 511px;
}
</style>

 -->
