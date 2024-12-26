
import { configureStore } from '@reduxjs/toolkit'

import searchTextSlice from './Slice/searchTextSlice'
import userInfoSlice from './Slice/userInfoSlice'






const store = configureStore({
    reducer: {
        searchText: searchTextSlice,
        userInfo: userInfoSlice,
    }
})

export default store