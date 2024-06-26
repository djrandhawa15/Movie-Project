import { createSlice } from "@reduxjs/toolkit";
import { appStorageName } from "../globals/globalVariable";

function getFavsFromLocalStorage() {
  const favs = localStorage.getItem(appStorageName);
  if (favs !== null) {
    return {
      items: JSON.parse(favs),
    };
  }
  return {
    items: [],
  };
}

const favsFromLocalStorage = getFavsFromLocalStorage();

const initialState = {
  items: favsFromLocalStorage.items,
};

function getIndex(item, arr) {
  return arr.findIndex((arrItem) => arrItem.id === item.id);
}

export const favSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const newFavs = [...state.items, action.payload];
      localStorage.setItem(appStorageName, JSON.stringify(newFavs));
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.items = newFavs;
    },
    removeFavorite: (state, action) => {
      const itemsCopy = [...state.items];
      itemsCopy.splice(getIndex(action.payload, state.items), 1);
      localStorage.setItem(appStorageName, JSON.stringify(itemsCopy));
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.items = itemsCopy;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addFavorite, removeFavorite } = favSlice.actions;

export default favSlice.reducer;
