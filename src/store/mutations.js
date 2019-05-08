import {UPDATE_COUNT} from './mutations-type'
export default {
    [UPDATE_COUNT](state,payload){
        state.count = payload
    }
}