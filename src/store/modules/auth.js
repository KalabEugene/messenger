import { getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export default {
    state: {
        user: null,
        unsubscribeAuth: null
        },
    mutations: {
        SET_USER(state, user){
            state.user = user
        },
        SET_UNSUBSCRIBE(state, payload){
            state.unsubscribeAuth = payload
        }
    },
    actions: {
/*             INIT_AUTH({dispatch, commit, state}){
                    return new Promise((resolve) => {
                        if(state.unsubscribeAuth)
                            state.unsubscribeAuth()

                        let unsubscribe = firebase.auth().onAuthStateChanged(user => {
                            if(user) {
                              dispatch('AUTO_LOGGIN_USER', user)
                              resolve(user)
                            }
                            
                          })
                        commit('SET_UNSUBSCRIBE', unsubscribe)
                    })
                },
 */        async SIGN_IN_USER({commit}) {
                commit('CLEAR_ERROR')
                commit('SET_LOADING', true)   
            try{
                const auth = getAuth();
                const result = await signInWithPopup(auth, new GoogleAuthProvider())
                commit('SET_USER', result.user)
                commit('SET_LOADING', false)
                console.log(result.user);
/*                     const credential = GoogleAuthProvider.credentialFromResult(result);
                    const token = credential.accessToken;
                    console.log(token)
                    console.log(result.user)
 */               } 
                catch(error) {
                    commit('SET_LOADING', false)
                    commit('SET_ERROR', error.message)
                    console.log(error)
/*                     const errorCode = error.code;
                    const errorMessage = error.message;
                    const email = error.email;
                    const credential = GoogleAuthProvider.credentialFromError(error);
 */                }
            },
            AUTO_LOGGIN_USER({commit}, user){
                commit('SET_USER', user)
            },
            async LOGOUT_USER({commit}){
               try { 
                await firebase.auth().signOut()
                commit('SET_USER', null)
            }
             catch(error) {
                commit('SET_LOADING', false)
                commit('SET_ERROR', error.message)
             }
            }
     },
    getters: {
        GET_USER(state){
            return state.user
        },
        IS_USER_LOGGED_IN(state){
            return state.user !== null
        }
    }

}
