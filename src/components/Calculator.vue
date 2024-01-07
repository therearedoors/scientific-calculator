<script>
import { defineComponent, ref } from 'vue'
const history = ref('')
const result = ref('')
const addNumber = (num) => {
    result.value += num
}
const addOperator = (operator) => {
    result.value += operator
}
</script>
<template>
    <div class="wrapper">
    <div class="logo">
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
        <div class="display">
            <div class="display__history">
            {{ history }}
            </div>
            <div class="display__result">
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
</style>