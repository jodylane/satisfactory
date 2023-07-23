import { setNestedObjectValues } from '@utils/formUtils';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ERRORS':
      return {
        ...state,
        errors: action.payload,
      };
    case 'SET_FIELD_VALUE':
      return {
        ...state,
        values: {
          ...state.values,
          ...action.payload,
        },
      };
    case 'SET_FIELD_TOUCHED':
      return {
        ...state,
        touched: {
          ...state.touched,
          ...action.payload,
        },
      };
    case 'SUBMIT_ATTEMPT':
      return {
        ...state,
        isSubmitting: true,
        touched: setNestedObjectValues(state.values, true),
      };
    case 'SUBMIT_SUCCESS':
      return {
        ...state,
        isSubmitting: false,
      };
    case 'RESET_FORM':
      return {
        ...state,
        ...action.payload,
      };
    case 'SUBMIT_FAILURE':
      return {
        ...state,
        isSubmitting: false,
        submitError: action.payload,
      };
    case 'SET_MODIFIED':
      return {
        ...state,
        isModified: action.payload,
      };
    default:
      return state;
  }
};

export default formReducer;
