import React, { useState, createContext, useEffect } from 'react';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});

function AuthProvider({ children }){
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [loadingAuth, setLoadingAuth] = useState(false);

  useEffect(()=> {
    async function loadStoarge(){
      const storageUser = await AsyncStorage.getItem('@devapp');

      if(storageUser){
        setUser(JSON.parse(storageUser))
        setLoading(false);
      }


      setLoading(false);

    }

    GoogleSignin.configure({
      webClientId: '656770453801-5vhrajfikro0967pc6u0r9uf92embeie.apps.googleusercontent.com',
    });

    loadStoarge();
  }, [])

  async function signUp(email, password, name){
    setLoadingAuth(true);

    await auth().createUserWithEmailAndPassword(email, password)
    .then(async (value) => {
      let uid = value.user.uid;
      await firestore().collection('users')
      .doc(uid).set({
        nome: name,
        email: email,
        urlImage: 'https://firebasestorage.googleapis.com/v0/b/lista-c162d.appspot.com/o/users%2F5zs8ShujJTaRXofyXe1wmIqlAAd2?alt=media&token=5ef98915-3712-4ede-9c65-1dc6538c569d'
      })
      .then(() => {
        let data = {
          uid: uid,
          nome: name,
          email: value.user.email,
          urlImage: 'https://firebasestorage.googleapis.com/v0/b/lista-c162d.appspot.com/o/users%2F5zs8ShujJTaRXofyXe1wmIqlAAd2?alt=media&token=5ef98915-3712-4ede-9c65-1dc6538c569d'
        }

        setUser(data);
        storageUser(data);
        setLoadingAuth(false);

      })

    })
    .catch((error) => {
      console.log(error);
      setLoadingAuth(false);
    })
  }

  async function signGoogle() {       
    const { idToken } = GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    
    await auth().signInWithCredential(googleCredential)
    .then(async (value) =>{ 
      setUser({
        uid: 'asdasdasdasdasdasdasd',
        nome: 'sla',
        email: '@masdoasdl.com'
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  async function signIn(email, password){
    setLoadingAuth(true);

    await auth().signInWithEmailAndPassword(email, password)
    .then( async (value) => {
      let uid = value.user.uid;

      const userProfile = await firestore().collection('users')
      .doc(uid).get();

      //console.log(userProfile.data().nome)
      let data = {
        uid: uid,
        nome: userProfile.data().nome,
        email: value.user.email,
        urlImage: 'https://firebasestorage.googleapis.com/v0/b/lista-c162d.appspot.com/o/users%2F5zs8ShujJTaRXofyXe1wmIqlAAd2?alt=media&token=5ef98915-3712-4ede-9c65-1dc6538c569d'
      };
      
      setUser(data);
      storageUser(data);
      setLoadingAuth(false);

    })
    .catch((error)=>{
      console.log(error);
      setLoadingAuth(false);
    })
  }
  
  async function signOut(){
    await auth().signOut();
    await AsyncStorage.clear()
    .then( () => {
      setUser(null);
    })
  }

  async function storageUser(data){
    await AsyncStorage.setItem('@devapp', JSON.stringify(data))
  }

  return(
    <AuthContext.Provider 
    value={{ 
      signed: !!user, 
      signUp, 
      signIn, 
      signOut, 
      signGoogle,
      loadingAuth, 
      loading, 
      user,
      setUser,
      storageUser
      }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;