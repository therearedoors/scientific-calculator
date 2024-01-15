<script setup lang="ts">
import { string } from '../services/string'
import type { Ref } from 'vue';
import { defineComponent, ref } from 'vue';
const history: Ref<string> = ref('');
const result: Ref<number> = ref(0);
const clearHistory = () => {
    console.log('clearHistory');
    history.value = ''
    result.value = 0
}
const deleteLast = () => {
    history.value = history.value.slice(0, -1)
}
const addNumber = (num: number | '.') => {
    if (num === '.' && history.value.includes('.')) return
    string.handleZero(history, num)
    history.value += num
}
const addOperator = (operator: string) => {
    history.value += operator
}
const calculate = () => {
    let sum = history.value;
    sum = sum.replace(/×/g, '*');
    sum = sum.replace(/÷/g, '/');
    result.value = eval(sum);
}
</script>
<template>
    <div class="wrapper">
    <div>
        <div class="logo">
        <img alt="Vue logo" src="../assets/logo.svg" />
        </div>
        <div>
        <h1>Vue 3 Calculator</h1>
        <p>
            This is a simple calculator built with Vue 3 and Vite.
        </p>
        </div>
    </div>
    <div>
        <div class="calculator">
        <div class="display bg-white">
            <div class="text-slate">
            {{ history }}
            </div>
            <div class="text-slate font-large">
            {{ result }}
            </div>
        </div>
        <div class="buttons">
            <button
            class="button button--secondary"
            @click="clearHistory"
            >
            AC
            </button>
            <button
            class="button button--secondary"
            @click="deleteLast"
            >
            DEL
            </button>
            <button
            class="button button--secondary"
            @click="addOperator('%')"
            >
            %
            </button>
            <button
            class="button button--secondary"
            @click="addOperator('÷')"
            >
            ÷
            </button>
            <button class="button" @click="addNumber(7)">7</button>
            <button class="button" @click="addNumber(8)">8</button>
            <button class="button" @click="addNumber(9)">9</button>
            <button
            class="button button--secondary"
            @click="addOperator('×')"
            >
            ×
            </button>
            <button class="button" @click="addNumber(4)">4</button>
            <button class="button" @click="addNumber(5)">5</button>
            <button class="button" @click="addNumber(6)">6</button>
            <button
            class="button button--secondary"
            @click="addOperator('-')"
            >
            -
            </button>
            <button class="button" @click="addNumber(1)">1</button>
            <button class="button" @click="addNumber(2)">2</button>
            <button class="button" @click="addNumber(3)">3</button>
            <button
            class="button button--secondary"
            @click="addOperator('+')"
            >
            +
            </button>
            <button class="button" @click="addNumber(0)">0</button>
            <button class="button" @click="addNumber('.')">.</button>
            <button
            class="button button--primary"
            @click="calculate"
            >
            =
            </button>
        </div>
    </div>
</div>
</div>
</template>

<style>
.wrapper {
    display: flex;
    flex-direction: column;
}

.logo {
    height: 100px;
    width: 100px;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

.button {
    height: 30px;
    width: 84px;
}
</style>