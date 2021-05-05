import {React} from 'react'

import {localLang} from '../utils/localize';

export const API_BASE_URL = 'https://hrms.delinternet.com/';

export const ACCESS_TOKEN = '@accessToken';

export const FIRST_TIME = '@firsttime';

export const USER_PROFILE = '@userProfile';

export const NORMAL_FONT =
  localLang() == 'pr' ? 'IRANSans' : 'Rubik-Black';

  export const MEDUM_FONT =
  localLang() == 'pr' ? 'IRANSans_Medium' : 'Rubik-Medium';

export const BOLD_FONT = localLang() == 'pr' ? 'IRANSans_Bold' : 'Rubik-Bold';

export const LIGHT_FONT =
  localLang() == 'pr' ? 'IRANSans_Light' : 'Rubik-Light';
