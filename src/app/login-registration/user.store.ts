import User from './user';

export default interface UserStore {
    loading: boolean,
    user: User
}
