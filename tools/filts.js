import Vue from 'vue'

// export const timeformat =  Vue.filter('timeformat',() => {

// })

export const timeformat = (data,spe,spe2) => {
    // 为什么还要写下面这句
    var date = new Date(data);
    var year = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();
    var h = date.getHours();
    var mm = date.getMinutes();
    var s = date.getSeconds();
    return year + spe + m + spe + d + " " + h + spe2 + mm + spe2 + s;
}