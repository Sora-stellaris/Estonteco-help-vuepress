<template>
  <section style="border-top: 2px solid #eaecef;padding-top:1rem;margin-top:2rem;">
    <div>
      <span class="leancloud-visitors"
            data-flag-title="Your Article Title">
        <em class="post-meta-item-text">阅读量: </em>
        <i class="leancloud-visitors-count"></i>
      </span>
    </div>
    <h2>
      <a href="javascript:;"></a>
      评论：
    </h2>
    <div id="vcomments"></div>
  </section>
</template>

<script>
export default {
  name: 'Valine',
  mounted: function () {
    const Valine = require('valine');
    if (typeof window !== 'undefined') {
      document.getElementsByClassName('leancloud-visitors')[0].id
        = window.location.pathname
      this.window = window
      window.AV = require('leancloud-storage')
    }

    new Valine({
      el: '#vcomments',
      appId: 'M8QRJ2aGeD2yfVtST5YgIGz9-gzGzoHsz',
      appKey: '3S1oI7rXKW7aOz37M24o0PDL',
      notify: false,
      verify: false,
      path: window.location.pathname,
      visitor: true,
      avatar: 'mm',
      placeholder: '在此处输入评论: '
    });
  },
}
</script>
