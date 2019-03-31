const messageReducer = (state = { message: 'hello' }, action) => {
  switch (action.type) {
    case 'HI':
      return { message: 'hi' };

    case 'HELLO':
      return { message: 'hello' };

    default:
      return state;
  }
};

export default messageReducer;