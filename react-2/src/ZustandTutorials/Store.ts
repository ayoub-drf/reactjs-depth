import { create } from "zustand";

// type useCounterStore = {
//     count: number,
//     increment: () => void,
//     decrement: () => void,
// };

// export const useCounter = create<useCounterStore>((set) => ({
//     count: 0,
//     increment: () => set((state) => ({count: state.count + 1})),
//     decrement: () => set((state) => ({count: state.count - 1})),
// }));

interface Recipe {
  id: number;
  name: string;
  gradients: string;
  instructions: string;
}

interface RecipeStore {
  recipes: Recipe[];
  addRecipe: (recipe: Recipe) => void;
  removeRecipe: (id: number) => void;
}

export const useRecipe = create<RecipeStore>((set) => ({
  recipes: [],
  addRecipe: (recipe) =>
    set((state) => ({ recipes: [...state.recipes, recipe] })),
  removeRecipe: (id) =>
    set((state) => ({
      recipes: [...state.recipes].filter((recipe) => recipe.id !== id),
    })),
}));

interface usePasswordStoreProps {
  length: number;
  includeNumbers: boolean;
  includeSymbols: boolean;
  includeUppercase: boolean;
  includeLowercase: boolean;
  password: string;
  setLength: (x: number) => void;
  toggleNumbers: () => void;
  toggleSymbols: () => void;
  toggleUppercase: () => void;
  toggleLowercase: () => void;
  generatedPassword: () => void;
}
export const usePasswordStore = create<usePasswordStoreProps>((set) => ({
  length: 12,
  includeNumbers: true,
  includeSymbols: false,
  includeUppercase: true,
  includeLowercase: true,
  password: "",
  setLength: (x) => set(() => ({ length: x })),
  toggleNumbers: () =>
    set((state) => ({ includeNumbers: !state.includeNumbers })),
  toggleSymbols: () =>
    set((state) => ({ includeSymbols: !state.includeSymbols })),
  toggleUppercase: () =>
    set((state) => ({ includeUppercase: !state.includeUppercase })),
  toggleLowercase: () =>
    set((state) => ({ includeLowercase: !state.includeLowercase })),
  generatedPassword: () =>
    set((state) => {
      const numbers = "0123456789";
      const lowercase = "abcdefghijklmnopqrstuvwxyz";
      const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const symbols = "@#$%^&*()_+=";

      let characters = "";
      if (state.includeNumbers) characters += numbers;
      if (state.includeSymbols) characters += symbols;
      if (state.includeUppercase) characters += uppercase;
      if (state.includeLowercase) characters += lowercase;

      if (!characters.length) return { password: "" };

      let newPassword = "";
      for (let i = 0; i < state.length; i++) {
        newPassword +=
          characters[Math.floor(Math.random() * characters.length)];
      }

      return { password: newPassword };
    }),
}));

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

interface StoreState {
  meals: Meal[];
  searchQuery: string;
  setMeals: (meals: Meal[]) => void;
  setSearchQuery: (query: string) => void;
}

export const useStore = create<StoreState>((set) => ({
  meals: [],
  searchQuery: "",
  setMeals: (meals: Meal[]) => set({ meals }),
  setSearchQuery: (query: string) => set({ searchQuery: query }),
}));
