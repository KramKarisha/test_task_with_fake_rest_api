import './App.css';
import {useEffect, useState} from "react";
import {getLastUser} from "./api/getLastUser";
import {createNewPost} from "./api/createNewPost";
import {createNewComment} from "./api/createNewComment";

function App() {
    const [status, setStatus] = useState('');

    useEffect(() => {
        const handler = async () => {
            const lastUser = await getLastUser();
            setStatus(JSON.stringify(lastUser))
            const createdPost = await createNewPost(lastUser.id);
            setStatus(JSON.stringify(createdPost))
            const createdComment = await createNewComment(createdPost.id, lastUser.name, lastUser.email);
            setStatus(JSON.stringify(createdComment))
        }
        handler();
    },[])

    return (
        <div className="App">
            TEST TASK WITH JSON PLACEHOLDER
            <h1>CURRENT STATUS</h1>
            <h2>{status}</h2>
        </div>
    );
}

export default App;
