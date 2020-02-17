import React, { useState, useContext } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { FriendContext } from "../context/FriendContext";

const NewFriendForm = ({ history }) => {
    const {friend, setFriend} = useContext(FriendContext)
    const [addFriend, setAddFriend] = useState({
        id: Date.now(),
        name: "",
        age: "",
        email: ""
    })

    const handleChange = event => {
        setAddFriend({ ...addFriend, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault();
        axiosWithAuth()
            .post("/friends", addFriend)
            .then(response => {
                setAddFriend({
                    name: "",
                    age: "",
                    email: ""
                })
                setFriend([...friend, response])
                history.push("/protected")
            })
    }

        return (
        <div>
        <form className="card" onSubmit={handleSubmit}>
            <input 
                type="text"
                name="name"
                placeholder="Friend Name"
                value={addFriend.name}
                onChange={handleChange}
            />
            <input 
                type="text"
                name="age"
                placeholder="Friend Age"
                value={addFriend.age}
                onChange={handleChange}
            />
            <input 
                type="text"
                name="email"
                placeholder="Friend Email"
                value={addFriend.email}
                onChange={handleChange}
            />

            <button type="submit">Add New Friend</button>
        </form>
        </div>
    )
}

export default NewFriendForm;