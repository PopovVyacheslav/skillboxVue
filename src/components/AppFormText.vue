<template>
    <AppFormField :title="title" :error="error">
        <input class="form__input" v-model="dataValue" :type="type" :placeholder="placeholder">
    </AppFormField>
</template>

<script>
    import formFieldMixin from '@/mixins/formFieldMixin';
    export default {
        props: {
            type: {
                default: 'text'
            },
        },
        mixins: [formFieldMixin]
    }
</script>