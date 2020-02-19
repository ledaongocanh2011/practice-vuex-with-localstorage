import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
// kiểm tra xem có lấy được state không, có dữ liệu bên trong không hay là mảng rỗng thì sẽ 
// ép kiểu về dạng JSON để lưu vào localstorage
if (!localStorage.getItem('Students') || !JSON.parse(localStorage.getItem('Students')).length) {
    localStorage.setItem('Students', JSON.stringify(
        [
            { id: 1, name: 'Le Dao Ngoc Anh', age: 19, address: 'Vinh Phuc' },
            { id: 2, name: 'Dich Duong Thien Ti', age: 19, address: 'Bac Kinh' },
            { id: 3, name: 'Vuong Tuan Khai', age: 20, address: 'Trung khanh' },
            { id: 4, name: 'Vuong Nguyen', age: 19, address: 'Trung Khanh' },
            { id: 5, name: 'Tieu Chien', age: 28, address: 'Trung Khanh' },
        ]
    ))
}
export default new Vuex.Store({
    state: {
        // trả về dạng mảng
        Students: JSON.parse(localStorage.getItem('Students'))
    },
    getters: {
        studentObjData(state) {
            return state.Students;
        }
    },
    mutations: {

    },
    actions: {

    }

})