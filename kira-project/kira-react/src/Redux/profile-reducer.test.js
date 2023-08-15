import profileReducer, {addPostActionCreator} from "./profile-reducer";
import React from "react"

test('length of posts should be incremented', () => {
    //1. test data
    let action = addPostActionCreator('Kirrrra')
    let state = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likes: 15},
            {id: 2, message: 'It is my first post', likes: 20}
        ]
    }
    //2. action
    let newState = profileReducer(state, action)
    //3. expectation
    expect(newState.posts.length).toBe(3)
});
