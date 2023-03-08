import React, { Component, useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './views/Home';
import SignUp from './views/Signup';
import Login from './views/Login';
import Feed from './views/Feed';
import Budget from './views/Budget';
// import CreatePost from './views/CreatePost';
// import UpdatePost from './views/UpdatePost';



export default function App() {
    const getUserFromLocalStorage = () => {
        const foundUser = localStorage.getItem('user107')
        if (foundUser){
            return JSON.parse(foundUser)
        }
        return {}
    };



    const [user, setUser] = useState(getUserFromLocalStorage());

    const [messages, setMessages] = useState([]);


    const logMeIn = (user) => {
        setUser(user);
        localStorage.setItem('user107', JSON.stringify(user))
    };
    const logMeOut = () => {
        setUser({});
        localStorage.removeItem('user107')
    };


    // const addToDo = (e) => {
    //     e.preventDefault();
    //     const text = e.target.myText.value
    //     setMyList(myList.concat([text]))
    // };
    // const deleteToDo = (indexToDelete) => {
    //     const copy = [...myList]
    //     copy.splice(indexToDelete, 1)
    //     setMyList(copy)
    // };

    const showMessage = () => {
        return messages.map(m => <p>{m}</p>)
    }

    return (
        <Router>
            <div>
                <Nav user={user} logMeOut={logMeOut} />
                {showMessage()}
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/budget' element={<Budget user={user} />} />
                    <Route path='/feed' element={<Feed />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/login' element={<Login logMeIn={logMeIn}/>} />
                    {/* <Route path='/todo' element={<ToDo myList={myList} handleToDoSubmit={addToDo} deleteToDo={deleteToDo} />} /> */}

                    {/* <Route path='/posts/:postId' element={<SinglePost user={user}/>} />
                    <Route path='/posts/update/:postId' element={<UpdatePost user={user}/>} />
                    <Route path='/posts/create' element={<CreatePost user={user}/>} /> */}
                </Routes>

            </div>
        </Router>
    )

}
