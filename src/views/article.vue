<template>
  <div class="app-body">
    <app-loader/>
    <app-alert ref="alert"/>
    <div class="am-g am-g-fixed blog-fixed">
      <article-list/>
      <intro/>
    </div>
  </div>
</template>
<script>
import AppLoader from '@/components/loader'
import AppAlert from '@/components/alert'
import articleList from './article_list'
import intro from './intro'
export default {
  name: 'articles',
  components: {
    articleList, intro, AppAlert, AppLoader
  }
}
</script>
