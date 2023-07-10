export const userRoles = {
  Admin: 'Admin',
  Editor: 'Editor',
  Member: 'Member',
};

export type TRole = keyof typeof userRoles;

export enum EPermissions {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export const userPermissions = {
  [userRoles.Admin]: [
    EPermissions.GET,
    EPermissions.POST,
    EPermissions.PUT,
    EPermissions.DELETE,
  ],
  [userRoles.Editor]: [EPermissions.GET, EPermissions.POST, EPermissions.PUT],
  [userRoles.Member]: [EPermissions.GET, EPermissions.PUT],
};

export interface IMembership {
  uid: string;
  name: string;
  role: TRole;
}

export const roleTypesArray = [
  userRoles.Admin,
  userRoles.Editor,
  userRoles.Member,
];

export interface Group {
  id: string;
  name: string;
  description: string;
  memberships: IMembership[];
  members: string[];
}

export interface IGroupRow extends Group {
  expandInfoDrawer: boolean;
}

export interface setGroupListAttributeProps {
  allGroups: {
    get: IGroupRow[];
    set: React.Dispatch<React.SetStateAction<IGroupRow[]>>;
  };
  currentFilteredGroups: {
    get: IGroupRow[];
    set: React.Dispatch<React.SetStateAction<IGroupRow[]>>;
  };
  setGroupList: React.Dispatch<React.SetStateAction<IGroupRow[]>>;
}
