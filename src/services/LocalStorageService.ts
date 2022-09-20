export default class LocalStorageService {
    public static getToken(): String {
        return JSON.parse(localStorage.getItem("user")).token;
    }
}
