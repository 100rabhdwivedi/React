import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [
        {
            id: 1,
            name: "John Doe",
            email: "john.doe@example.com",
            age: 28,
            isAdmin: false,
            createdAt: "2025-07-10T14:23:00Z"
        },
        {
            id: 2,
            name: "Jane Smith",
            email: "jane.smith@example.com",
            age: 32,
            isAdmin: true,
            createdAt: "2025-07-09T10:15:00Z"
        },
        {
            id: 3,
            name: "Alex Johnson",
            email: "alex.johnson@example.com",
            age: 24,
            isAdmin: false,
            createdAt: "2025-07-08T18:05:00Z"
        },
        {
            id: 4,
            name: "Emily Davis",
            email: "emily.davis@example.com",
            age: 29,
            isAdmin: false,
            createdAt: "2025-07-07T09:45:00Z"
        },
        {
            id: 5,
            name: "Michael Brown",
            email: "michael.brown@example.com",
            age: 35,
            isAdmin: true,
            createdAt: "2025-07-06T12:00:00Z"
        },
        {
            id: 6,
            name: "Olivia Wilson",
            email: "olivia.wilson@example.com",
            age: 27,
            isAdmin: false,
            createdAt: "2025-07-05T11:20:00Z"
        },
        {
            id: 7,
            name: "Liam Martinez",
            email: "liam.martinez@example.com",
            age: 31,
            isAdmin: false,
            createdAt: "2025-07-04T08:40:00Z"
        },
        {
            id: 8,
            name: "Sophia Anderson",
            email: "sophia.anderson@example.com",
            age: 26,
            isAdmin: true,
            createdAt: "2025-07-03T14:50:00Z"
        },
        {
            id: 9,
            name: "William Thomas",
            email: "william.thomas@example.com",
            age: 30,
            isAdmin: false,
            createdAt: "2025-07-02T16:30:00Z"
        },
        {
            id: 10,
            name: "Ava Taylor",
            email: "ava.taylor@example.com",
            age: 23,
            isAdmin: false,
            createdAt: "2025-07-01T19:10:00Z"
        }
    ]
}

export const UserReducer = createSlice({
    name: "users",
    initialState,
    reducers: {
        deleteuser:(state,action)=>{
            state.users = state.users.filter(user => user.id !== action.payload)
            
        }
    }
})

export default UserReducer.reducer;
export const {deleteuser} = UserReducer.actions