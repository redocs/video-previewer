// * appStore
// We use this file for create all the State to share in the App
import ls from 'local-storage';
const myVideos = ls.get('myVideos');
const userInfo = ls.get('user');

export const appStore = () => {
  const initialState = {
    title: {
      title: 'Saying Hi to my customers',
      text: 'Fusce quis magna vel ex pellentesque consequat sed et turpis. Vivamus bibendum rutrum euismod. Sed non sagittis est, semper',
      tags: ['Email']
    },
    previewer: {
      text: 'Type or paste your videoscript here. You can also request a translation of an English script to any of 27 other languages',
      actor: 1,
      voice: 0,
      alignment: 1,
      backgroundType: 0,
      background: 0
    },
    tabs: {
      active: 0
    },
    videos: myVideos || [],
    user: userInfo || {}
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case 'addUser':
        return {
          ...state,
          user: action.user
        };

      case 'addTitle':
        return {
          ...state,
          title: action.title
        };

      case 'editPreview':
        return {
          ...state,
          previewer: action.previewer
        };

      case 'changeTab':
        return {
          ...state,
          tabs: action.tabs
        };

      case 'saveVideo':
        return {
          ...state,
          videos: action.videos
        }

      default:
        return state;
    }
  };
  return {
    initialState,
    reducer
  };
};
