// store/features/themeSlice.ts
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface ThemeState {
  isDarkMode: boolean
}

const initialState: ThemeState = {
  isDarkMode: false // veya localStorage'dan başlangıç değeri alınabilir
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode
    },
    setTheme: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload
    }
  }
})

export const { toggleTheme, setTheme } = themeSlice.actions
export default themeSlice.reducer