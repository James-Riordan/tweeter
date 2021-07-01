
 import { createStore } from "vuex";
 import { UserModule } from "./User";
 
 export default createStore({
   state: {
     user: null
   },
   mutations: {},
   actions: {},
   modules: {
       User: UserModule
   }
 })
 