import {UPDATE_COUNT} from './mutations-type'
export default {
    updateCount({commit},payload){
        commit(UPDATE_COUNT,payload)
    }
}