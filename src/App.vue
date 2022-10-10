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
    import {interfaceTest} from "./api";

    const item: Ref<String> = ref('00909');
    console.log(process.env);
    // console.log(process);

    (async () => {
        let test = await interfaceTest();
        console.log(test);
    })()
</script>

<style scoped lang="scss">
    .warp {
        color: yellow;
      >p {
        color: red;
      }
    }
</style>