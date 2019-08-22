// 引入
import axios from 'axios'

// 基准路径：可以设置axios发起请求时的路径参照，就是指路由都是基于指定的基准路径而言的
axios.defaults.baseURL = 'http://127.0.0.1:3000'

// 添加接口方法
export const getAllCateList = ()=>{
    // return axios.get('http://127.0.0.1:3000/getAllCateList') // 返回了一个promise对象
    return axios({
        url:'/getAllCateList',
        // method:'get' // get是默认的
    })
}

/**
 * 
 * @param {*} params 
 */
export const getpostbyid = (params) => {
    // return axios.get('http://127.0.0.1:3000/getPostById',{
    //     params:params
    // })
    return axios({
        url:'http://127.0.0.1:3000/getPostById',
        // params:get方式传递参数
        params
        // post方式的参数：data
    })
}