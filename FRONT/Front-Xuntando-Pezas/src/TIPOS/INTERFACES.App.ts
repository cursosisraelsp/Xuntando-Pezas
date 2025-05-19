interface UserData {
    username: string;
}
interface LocalContextType {
    login: (dato: any) => void;
    logout: () => void;
    isUserLogueado: boolean;
}
interface DatosUser {
    username:string,
    age:string
  }
export type {
    UserData,
    LocalContextType,
    DatosUser
}