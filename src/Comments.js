import { useState, useEffect, useRef } from "react";

export function Comments() {
    const commentRef = useRef(null);

    const [commentList, setCommentList] = useState([
        {
            id: 1,
            userId: 1,
            videoId: 1,
            message: "Comment1"
        },
        {
            id: 2,
            userId: 2,
            videoId: 2,
            message: "Comment2"
        }
    ]);

    const addComment = () => {
        const comment = {
            id: commentList.length + 1,
            userId: 1,
            videoId: 1,
            message: commentRef.current.value
        };

        setCommentList([...commentList, comment]);
        commentRef.current.value = "";
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            addComment();
        }
    };

    useEffect(() => {
        console.log(commentList);
    }, [commentList]);

    return (
        <div>
            <input type="text" ref={commentRef} onKeyPress={handleKeyPress} ></input>
            <ul>
                {commentList.map(({ id, message }) =>
                    <li key={id}>{message}</li>
                )}
            </ul>
        </div>

    );
}