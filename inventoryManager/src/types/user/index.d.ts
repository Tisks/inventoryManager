export const MEMBER_INVITEES_REF = `member_invitees/`;
export const MEMBER_INVITER_REF = `member_inviters/`;
export const CURRENT_INVITE_REF = `/current_invite_notification_shown`;
export const INVITE_TO_PREFIX = 'invite_to_';
export const INVITE_FROM_PREFIX = 'invite_from_';

export type TInvitation = {
  name: string;
  description: string;
  inviter: string;
  groupId: string;
  uid: string;
};

export type TUser = {
  displayName: string | undefined;
  email: string | null;
  phoneNumber: string | null;
  photoURL: string | null;
  providerId: string;
  uid: string;
};
