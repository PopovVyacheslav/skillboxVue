<template>
    <form>
        <ul class="colors colors--green">
            <li class="colors__item" v-for="color in colors" :key="color.id">
                <label class="colors__label">
                    <input class="colors__radio sr-only" type="radio" name="color" :value="color.id" checked="" v-model="currentColor">
                    <span class="colors__value" :style="{'background-color': color.hexCode}"/>
                </label>
            </li>
        </ul>
    </form>
</template>

<script>
    export default {
        props: ['colors', 'selectedColor'],
        computed:{
            currentColor:{
                get(){
                    return this.selectedColor;
                },
                set(value){
                    this.$emit('update:selectedColor', value);
                }
            },
        },
    }
</script>