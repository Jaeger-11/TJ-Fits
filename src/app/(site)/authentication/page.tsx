"use client";
import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth"
import { auth } from "@/database/config";
import { inputProps } from "@/app/interfaces/interface";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/lib/hooks";
import { setUser, logOut } from "@/lib/features/userSlice";
import { updateNotification, closeNotification } from "@/lib/features/userSlice";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/database/config";

const Authenticate = () => {
    const dispatch = useAppDispatch();
    const router = useRouter()
    const [authType, setAuthType] = useState<string>("signin");
    const [userData, setUserData] = useState<inputProps>({email: "", password: ""});
    const [errorInfo, setErrorInfo] = useState<string>("");

    const provider = new GoogleAuthProvider();

    onAuthStateChanged(auth, (user) => {
        if(user){
            let userInfo = {email: user.email, username: user.displayName, uid: user.uid}
            dispatch(setUser(userInfo))
        } else {
            dispatch(logOut())
        }
    })

    const handleInput = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        let newUserData = { [target.name] : target.value }
        setUserData({...userData, ...newUserData})
    }

    const handleLoginSubmit = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setErrorInfo('Authenticating...')
        signInWithEmailAndPassword(auth, userData.email, userData.password)
        .then((userCredential) => {
            setErrorInfo("")
            dispatch(updateNotification({text:"User Successfully Signed In!", imageUrl: 'show'}))
            setTimeout(() => {
                dispatch(closeNotification())
            }, 2000);
            setUserData({email:"", password:"", username: ""})
            router.push('/')
        })
        .catch((error) => {
            const errorMessage = error.message;
            setErrorInfo(errorMessage);
            setTimeout(() => {
                setErrorInfo("")
            }, 3000);
        });   
    }

    const createData = async (id:string) => {
        await setDoc(doc(db, "users", id), {wishlist:[]});
    }

    const handleSignupSubmit = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setErrorInfo('Creating...')
        if(userData.email && userData.password && userData.username){
            createUserWithEmailAndPassword(auth, userData.email, userData.password)
            .then((userCredential) => {
                if(auth.currentUser){
                    updateProfile(auth.currentUser, {
                        displayName: userData.username
                    }).then(() => {
                        // Profile updated!
                        // ...
                    }).catch((error) => {
                        setErrorInfo(error);
                    });
                }
                setUserData({email:"", password:"", username: ""})
                createData(auth.currentUser?.uid || '')
                setErrorInfo("")
                dispatch(updateNotification({text:"User Successfully Signed In!", imageUrl: 'show'}))
                setTimeout(() => {
                    dispatch(closeNotification())
                }, 2000);
                router.push('/')
            })
            .catch((error) => {
                const errorMessage = error.message;
                setErrorInfo(errorMessage);
                setTimeout(() => {
                    setErrorInfo("")
                }, 3000);
            });
        } else {
            setErrorInfo("All Fields Are Required!");
                setTimeout(() => {
                    setErrorInfo("")
                }, 3000);
        }
    }

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            // The signed-in user info.
            const user = result.user;
            createData(auth.currentUser?.uid || '')
            dispatch(updateNotification({text:"User Successfully Signed In!", imageUrl: 'show'}))
            setTimeout(() => {
                dispatch(closeNotification())
            }, 2000);
            router.push('/')
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });

    }

    const switchAuthenticationType = () => {
        if(authType === 'signin'){
            setAuthType('signup')
        } else setAuthType('signin')
    }

  return (
    <div className="">
        <div className="md:flex md:h-max md:my-12 rounded-lg overflow-hidden w-full md:w-3/5 lg:max-w-[500px] mx-auto">
        <section className="p-4 bg-white sm:p-8 md:relative md:flex md:justify-center md:items-center md:flex-1 md:p-0">
            <article className="md:w-[90%] lg:w-3/4 py-8">
                <h2 className="text-xl text-center font-bold sm:text-2xl md:text-3xl styreneBold"> TJ.<span className="text-green-500">FITS</span> </h2>
                <form className="my-6">
                    { authType !== 'signin' ?
                    <div>
                        <label htmlFor="username" className="text-sm">Username</label> <br />
                        <input type="text" required placeholder="Username" id="username" name="username" 
                        onChange={handleInput}
                        className="p-3 my-2 w-full rounded-md text-sm text-lightgray focus:outline-none bg-gray-100 placeholder:text-sm"/>
                    </div> : undefined
                    }
                    
                    <div>
                        <label htmlFor="email" className="text-sm">Email</label> <br />
                        <input type="text" placeholder="Email" id="email" name="email" 
                        onChange={handleInput}
                        className="p-3 my-2 w-full rounded-md text-sm text-lightgray focus:outline-none bg-gray-100 placeholder:text-sm"/>
                    </div>
                    <div>
                        <label htmlFor="password" className="text-sm">Password</label> <br />
                        <input type="password" name="password" id="password" placeholder="Enter Your Password" 
                        onChange={handleInput}
                        min={8}
                        className="p-3 my-2 w-full rounded-md text-lightgray focus:outline-none bg-gray-100 placeholder:text-sm"/>
                    </div>
                    <p className="text-red-600 font-medium text-xs">{errorInfo}</p>
                    <button 
                    onClick={authType === 'signin' ? handleLoginSubmit : handleSignupSubmit} 
                    className="text-white bg-black p-4 w-full font-semibold rounded-md my-4 hover:scale-95 transition-all"> 
                    {authType === 'signin' ? 'Sign In' : 'Create an account'} 
                    </button>

                    <div className="flex gap-1 items-center justify-center">
                        <span className="h-[1px] bg-gray-600 w-1/4"></span>
                        <p>or</p>
                        <span className="h-[1px] bg-gray-600 w-1/4"></span>
                    </div>

                    <div onClick={signInWithGoogle} className="cursor-pointer text-white flex items-center gap-2 font-semibold justify-center bg-green-500 p-4 w-full rounded-md my-4 hover:scale-95 transition-all">
                        <svg viewBox="-0.5 0 48 48" className="w-6" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </g></svg>
                        Sign in with Google
                    </div>

                    <p className="text-gray-500 text-sm text-right">{authType === 'signin' ? 'Not a user yet? ': 'Have an existing account? ' } 
                    <span className="text-highlight underline font-bold transition-all text-black cursor-pointer" 
                    onClick={switchAuthenticationType}> 
                    {authType === 'signin' ? 'Create an account' : 'Log In'} 
                    </span>
                    </p>
                </form>
            </article>    
        </section>
    </div>
    </div>
  )
}

export default Authenticate