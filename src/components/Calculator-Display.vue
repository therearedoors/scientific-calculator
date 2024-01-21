<script setup lang="ts">
import { defineProps } from 'vue'
defineProps(['history', 'result'])
</script>

<template>
<div class="display bg-white">
    <div class="text-black box-content h-5">
    {{ history }}
    </div>
    <div class="text-black font-large">
    {{ result }}
    </div>
</div>
</template>