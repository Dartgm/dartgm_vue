import { createStore, createLogger } from 'vuex'
import count from './modules/count'
import todo from './modules/todo'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
    modules: {
        count,
        todo
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})