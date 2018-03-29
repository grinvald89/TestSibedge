export interface IUser {
    cell: string;
    dob: string;
    email: string;
    gender: string;
    id: IId;
    location: ILocation;
    login: ILogin;
    name: IName;
    nat: string;
    phone: string;
    picture: IPicture;
    registered: string;
}

interface IId {
    name: string;
    value: string;
}

interface ILocation {
    city: string;
    postcode: number;
    state: string;
    street: string;
}

interface ILogin {
    md5: string;
    password: string;
    salt: string;
    sha1: string;
    sha256: string;
    username: string;
}

interface IName {
    first: string;
    last: string;
    title: string;
}

interface IPicture {
    large: string;
    medium: string;
    thumbnail: string;
}