// 导入vue和vuex
import Vuex from 'vuex'
import Vue from 'vue'

// 注册vuex到vue里面
Vue.use(Vuex)


// 创建vuex的仓库对象, state-共享对象和数据， mutations共享方法
let store = new Vuex.Store({
    state: {
        title: '学习ts+vue',
        loveCount: 1
    },
    mutations: {
        sayHi (state) {
            console.log('学习吧' + state.title);
        },
        addLover (state) {
            state.loveCount++
        }
    }
})
// 导入仓库对象
export default store