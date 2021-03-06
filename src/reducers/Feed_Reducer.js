import actionNames from '../actions/action_names';

const initialValue = {
  payload: {
      data:{
        posts: [
    {
      "client": "Loading...",
      "title": "Loading...",
      "description": "Loading...",
      "date": "Loading..."
    },
    {
      "client": "Loading...",
      "title": "Loading...",
      "description": "Loading...",
      "date": "Loading..."
    },
    {
      "client": "Loading...",
      "title": "Loading...",
      "description": "Loading...",
      "date": "Loading..."
    }
  ],
  message: 'Jobs not posted'
  }
 }
}

export default function Feed_Reducer(state = initialValue, data) {
    switch (data.type) {
        case actionNames.GET_ALL_POSTS_SUCCESS:
            return {
                payload: data.payload,
                error: false,
                loading: false
            };
            break;
        case actionNames.GET_ALL_POSTS_LOADING:
            return {
                loading: true,
                error: false,
                data: []
            };
            break;
        case actionNames.GET_ALL_POSTS_ERROR:
            return {
                loading: false,
                error: true,
                data: []
            };
            break;
        case actionNames.POST_JOB_TO_FEED_SUCCESS:
            return {
                payload: data.payload,
                error: false,
                loading: false
            };
            break;
        case actionNames.POST_JOB_TO_FEED_LOADING:
            return {
                loading: true,
                error: false,
                data: []
            };
            break;
        case actionNames.POST_JOB_TO_FEED_FAILURE:
            return {
                loading: false,
                error: true,
                data: []
            };
            break;
        default:
            return state;
    }
}
