<template>
  <div class="content">
  </div>
</template>

<script>
import {mapActions} from 'vuex'
// import {getAdmin} from '../api/index'

export default {
  name: 'index',
  components: {},
  data () {
    return {
    }
  },
  created () {
  },
  mounted () {
  },
  computed: {
  },
  methods: {
    ...mapActions(['go'])
  }
}
</script>
<style scoped>
</style>
