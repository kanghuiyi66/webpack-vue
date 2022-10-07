<template>
    <div class="warp">
        {{ item }}
        <p>
            你好
        </p>
    </div>
</template>
<script setup lang="ts">
    import {Ref, ref} from 'vue';
    const item: Ref<String> = ref('00909')
</script>

<style scoped lang="scss">
    .warp {
        color: yellow;
      >p {
        color: red;
      }
    }
</style>