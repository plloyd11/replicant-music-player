import { createStore } from 'vuex';

import { auth } from '../plugins/firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';

const store = createStore({
    state: {
        user: null,
        authIsReady: false
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
            console.log('User state changed:', state.user);
        },
        setAuthIsReady(state, payload) {
            state.authIsReady = payload;
            console.log('Auth state changed:', state.authIsReady);
        }
    },
    actions: {
        async signUp(context, { email, password }) {
            console.log('Signing up...');
            const res = await createUserWithEmailAndPassword(auth, email, password);
            try {
                context.commit('setUser', res.user);
            } catch (error) {
                console.error(`Could not complete signup, fuck! ${error}`);
            }
        },
        async login(context, { email, password }) {
            console.log('Logging in...');
            const res = await signInWithEmailAndPassword(auth, email, password);
            try {
                context.commit('setUser', res.user);
            } catch (error) {
                console.error(`Could not complete login, fuck! ${error}`);
            }
        },
        async logout(context) {
            console.log('Logging out...');
            await signOut(auth);
            context.commit('setUser', null);
        }
    }
});

onAuthStateChanged(auth, user => {
    if (user) {
        store.commit('setUser', user);
    } else {
        store.commit('setUser', null);
    }
    store.commit('setAuthIsReady', true);
    unsub();
});

// export store
export default store;
