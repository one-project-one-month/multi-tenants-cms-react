import {
  IconFileAnalytics,
  IconGitPullRequest,
  IconHelp,
  IconLayoutDashboard,
  IconSettings,
  IconTool,
  IconUserCog,
  IconUserShield,
} from '@tabler/icons-react';
import type { SidebarData } from '../types';

export const sidebarData: SidebarData = {
  navGroups: [
    {
      title: 'General',
      items: [
        {
          title: 'Dashboard',
          url: '/',
          icon: IconLayoutDashboard,
        },
        {
          title: 'Owner',
          url: '/owner',
          icon: IconUserShield,
        },
        {
          title: 'Report',
          url: '/report',
          icon: IconFileAnalytics,
        },
        {
          title: 'Page Request',
          url: '/page-request',
          icon: IconGitPullRequest,
        },
      ],
    },
    {
      title: 'Other',
      items: [
        {
          title: 'Settings',
          icon: IconSettings,
          items: [
            {
              title: 'Profile',
              url: '/settings',
              icon: IconUserCog,
            },
            {
              title: 'Account',
              url: '/settings/account',
              icon: IconTool,
            },
          ],
        },
        {
          title: 'Help Center',
          url: '/help-center',
          icon: IconHelp,
        },
      ],
    },
  ],
};
