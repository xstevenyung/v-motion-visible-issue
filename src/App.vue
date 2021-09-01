<script lang="ts">
import { defineComponent } from "vue";
import { CheckIcon } from "@heroicons/vue/solid";

export default defineComponent({
  components: { CheckIcon },
});
</script>

<template>
  <div
    class="
      w-screen
      flex
      justify-center
      items-center
      gap-5
      px-6
      overflow-hidden
      bg-black
    "
    style="height: 800px"
    v-motion-pop
  >
    <p>Always visible so we can use <pre>v-motion-pop</pre></p>
  </div>

  <div
    class="
      w-screen
      flex
      justify-center
      items-center
      gap-5
      px-6
      overflow-hidden
      bg-black
    "
    style="height: 800px"
    v-motion-pop-visible
  >
    <p>Not always visible on first load</p>
    <p>For example, not visible on a 15" MacBook Pro</p>
    <p>But visible on a 4k screen</p>
  </div>
</template>
