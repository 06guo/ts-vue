// 导入vue和vuex
import Vuex from 'vuex'
import Vue from 'vue'
import ActionHelper from './ActionHelper'

// 注册vuex到vue里面
Vue.use(Vuex)


// 创建vuex的仓库对象, state-共享对象和数据， mutations共享方法
let store = new Vuex.Store({
    state: {
        title: '学习ts+vue',
        isShow: false, // 是否展示新增弹框
        transMemo: null,
        filterId: 0, 
        aHelper: new ActionHelper()
    },
    mutations: {
        showEditMemo (state: any, editMemo: any) {
            // 将传递的editmemo转成transMemo
            console.log(editMemo, 'editMemo');
            
            state.transMemo = editMemo
            // 显示编辑框
            state.isShow = true
        }
    }
})
// 导入仓库对象
export default store