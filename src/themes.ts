import type { GlobalThemeOverrides } from 'naive-ui';

export const lightThemeOverrides: GlobalThemeOverrides = {
  Menu: {
    itemHeight: '32px',
  },

  Layout: { color: '#f2f2f2' },

  AutoComplete: {
    peers: {
      InternalSelectMenu: { height: '498px' },
    },
  },
};

export const darkThemeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#3394da',
    primaryColorHover: '#4e6ac2',
    primaryColorPressed: '#0457d5',
    primaryColorSuppl: '#4569f1',
  },

  Notification: {
    color: '#8a8989',
  },

  AutoComplete: {
    peers: {
      InternalSelectMenu: { height: '500px', color: '#1d1d1d' },
    },
  },

  Menu: {
    itemHeight: '32px',
  },

  Layout: {
    color: '#1d1d1d',
    siderColor: '#242424',
    siderBorderColor: 'transparent',
  },

  Card: {
    color: '#242424',
    borderColor: '#272727',
  },

  Table: {
    tdColor: '#242424',
    thColor: '#353535',
  },
};
