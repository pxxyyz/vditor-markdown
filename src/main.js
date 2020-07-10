// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Vditor from 'vditor'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    contentEditor: '',
  },
  mounted () {
    this.contentEditor = new Vditor('vditor', {
      toolbarConfig: {
        pin: true,
      },
      cache: {
        enable: false,
      },
      hint: {
        emoji: {
          pray: '🙏',
          broken_heart: '💔',
          ok_hand: '👌',
          smile: '😄',
          laughing: '😆',
          smirk: '😏',
          heart_eyes: '😍',
          grin: '😁',
          stuck_out_tongue: '😛',
          expressionless: '😑',
          unamused: '😒',
          sob: '😭',
          joy: '😂',
          tired_face: '😫',
          blush: '😊',
          cry: '😢',
          fearful: '😨'
        }
      },
      upload: {
        accept: 'image/*,.mp3, .wav, .rar',
        token: 'test',
        url: '/api/upload/editor',
        linkToImgUrl: '/api/upload/fetch',
        filename (name) {
          return name.replace(/[^(a-zA-Z0-9\u4e00-\u9fa5\.)]/g, '').
            replace(/[\?\\/:|<>\*\[\]\(\)\$%\{\}@~]/g, '').
            replace('/\\s/g', '')
        },
      },
      height: 360,
      counter: 65535,
      preview: {
        mode: 'both',
        parse: () => {
          LazyLoadImage()
        },
      },
      typewriterMode: true,
      after: () => {
        this.contentEditor.setValue('# hello, Vditor + Vue!')
      },
    })
  },
})