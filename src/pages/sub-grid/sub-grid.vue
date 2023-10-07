<script setup lang="ts"></script>

<template>
  <div class="grid">
    <div class="grid-item">
      <div class="photo">
        <img src="https://source.unsplash.com/random/250x250" />
      </div>
      <div class="title">タイトル</div>
      <div class="description">
        長い説明文。長い説明文。長い説明文。長い説明文。長い説明文。長い説明文。長い説明文。長い説明文。長い説明文。長い説明文。長い説明文。
      </div>
    </div>
    <div class="grid-item">
      <div class="photo">
        <img src="https://source.unsplash.com/random/120x120" />
      </div>
      <div class="title">
        ここには新しい画像の情報が入ります。タイトルは長くなることがあります。
      </div>
      <div class="description">短めの説明</div>
    </div>
    <div class="grid-item">
      <div class="photo">
        <img src="https://source.unsplash.com/random/130x130" />
      </div>
      <div class="title">
        ここには新しい画像の情報が入ります。タイトルは長くなることがあります。
      </div>
      <div class="description">短めの説明</div>
    </div>
    <div class="grid-item">
      <div class="photo">
        <img src="https://source.unsplash.com/random/250x150" />
      </div>
      <div class="title">
        長いタイトルの例。長いタイトルの例。長いタイトルの例。長いタイトルの例。長いタイトルの例。長いタイトルの例。長いタイトルの例。長いタイトルの例。長いタイトルの例。長いタイトルの例。
      </div>
      <div class="description">短めの説明</div>
    </div>
    <div class="grid-item">
      <div class="photo">
        <img src="https://source.unsplash.com/random/250x130" />
      </div>
      <div class="title">普通のタイトル</div>
      <div class="description">短めの説明</div>
    </div>
    <div class="grid-item">
      <div class="photo">
        <img src="https://source.unsplash.com/random/250x100" />
      </div>
      <div class="title">普通のタイトル</div>
      <div class="description">
        長い説明。長い説明。長い説明。長い説明。長い説明。長い説明。長い説明。長い説明。長い説明。長い説明。長い説明。長い説明。長い説明。長い説明。
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 260px);
  gap: 20px 15px;
}

.grid-item {
  grid-row: span 3;
  display: grid;
  grid-template-rows: subgrid;
  gap: 5px 0px;
}

.grid-item div {
  border: 1px solid #ccc;
}

.grid-item .photo {
  display: grid;
  justify-content: center;
  align-items: center;
}
</style>
