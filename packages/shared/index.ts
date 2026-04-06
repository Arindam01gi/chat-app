export const SOCKET_EVENTS = {
  JOIN_ROOM: 'join_room',
  SEND_MESSAGE: 'send_message',
  RECEIVE_MESSAGE: 'receive_message'
};

export interface MessagePayload {
  roomId: string;
  text: string;
  senderId: string;
  fcmToken?: string;
}
