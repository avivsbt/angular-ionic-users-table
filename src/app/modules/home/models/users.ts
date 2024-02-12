export interface IUser {
    gender: string;
    name: IUserName;
    email: string;
    picture: IUserPicture;
    phone: string;
    id: IUserId;
    registered: IUserRegistered;
    login: IUserLogin;
}

export interface IUserName {
    title: string;
    first: string;
    last: string;
}

export interface IUserPicture {
    large: string;
    medium: string;
    thumbnail: string;
}

export interface IUserId {
    name: string;
    value: string;
}

export interface IUserRegistered {
    date: string;
    age: number;
}

export interface IUserLogin {
    uuid: string;
}

export interface IUsersResponseDto {
    results: IUser[];
}