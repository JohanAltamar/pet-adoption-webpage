export const initialPageParams = {
  petsList: [],
  petsCount: 0,
  string: "",
  pageParams: {
    age: "",
    foundation: "",
    gender: "",
    limit: 5,
    order: "desc",
    page: 1,
    sort: "createdAt",
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "NEXT_PAGE":
      return state;

    case "ADD_CONTENT":
      return {
        ...state,
        petsList: action.payload.pets,
        petsCount: action.payload.petsCount,
      };

    case "PETS_COUNT":
      return {
        ...state,
        petsCount: action.payload,
      };

    case "PAGE_CHANGE":
      return {
        ...state,
        pageParams: {
          ...state.pageParams,
          page: +state.pageParams.page + action.payload,
        },
      };

    case "UPDATE_PAGE_PARAMS":
      return {
        ...state,
        pageParams: {
          ...action.payload,
        },
      };

    default:
      return state;
  }
};

export default reducer;
