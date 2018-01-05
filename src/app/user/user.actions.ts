export class UserActions {
    public static SELECT_GROUP = 'SELECT_GROUP';

    public static selectGroup(groupId: number) {
        return {
            type: UserActions.SELECT_GROUP,
            groupId
        }
    }
}