<template>
  <!-- Preloader -->
  <div class="loader-mask" >
    <div class="loader">
      <div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app-loader',
  mounted () {
    console.log('hello word')
    $('.loader').fadeOut('slow')
    $('.loader-mask').delay('slow').fadeOut('slow')
  }
}
</script>
