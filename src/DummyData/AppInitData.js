export default {

  workspaces: [
    {
      ws_name: 'workspaceAdmin1',
      ws_id: 0,
      role_id: 1,
      is_fav: 0,
    },
    {
      ws_name: 'workspaceMember1',
      ws_id: 1,
      role_id: 2,
      is_fav: 0,
    },
    {
      ws_name: 'workspace2',
      ws_id: 2,
      role_id: 1,
      is_fav: 0,
    },
    {
      ws_name: 'workspaceAdminFav2',
      ws_id: 3,
      role_id: 2,
      is_fav: 1,
    },
    {
      ws_name: 'workspace3',
      ws_id: 4,
      role_id: 1,
      is_fav: 0,
    },
    {
      ws_name: 'workspace3',
      ws_id: 5,
      role_id: 2,
      is_fav: 1,
    },
    {
      ws_name: 'workspace4',
      ws_id: 6,
      role_id: 1,
      is_fav: 0,
    },
    {
      ws_name: 'workspace4',
      ws_id: 7,
      role_id: 2,
      is_fav: 1,
    },
    {
      ws_name: 'workspace5',
      ws_id: 8,
      role_id: 1,
      is_fav: 0,
    },
    {
      ws_name: 'workspace5',
      ws_id: 9,
      role_id: 2,
      is_fav: 1,
    },
  ],
  notifications: [
    {
      title: 'WorkList Noti Test',
      workspaceName: 'workspace2',
      desc: 'test Noti',
      type: 'board',
      endDate: '2021/06/22',
      ws_id: 0,
    },
    {
      title: 'Card Noti Test',
      workspaceName: 'workspace1',
      desc: 'test Noti',
      type: 'card',
      endDate: '2233/06/30',
      ws_id: 1,
    },
    {
      title: 'Noti Noti Test',
      workspaceName: 'workspace2',
      desc: 'test Noti',
      type: 'todo',
      endDate: '2021/06/30',
      ws_id: 1,
    },
    {
      title: 'Invite Noti Test',
      workspaceName: 'workspace3',
      desc: 'test Noti',
      type: 'invite',
      endDate: '2021/2type/30',
      ws_id: 0,
    },
  ],
};
