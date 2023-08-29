//selectors
export const getAllCategories = (state) => state.categories;
export const getPostsByCategory = (state, category) => state.posts.filter((post) => post.category === category);

// actions
const createActionName = actionName => `app/categories/${actionName}`;
const ADD_CATEGORY = createActionName('ADD_CATEGORY');

// action creators
const categoryReducer = (statePart = [], action) => {

  switch (action.type) {
    case ADD_CATEGORY:
      return [...statePart, action.payload];
    default: 
    return statePart;
  }
};

export default categoryReducer;