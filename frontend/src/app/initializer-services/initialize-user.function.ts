import { UserService } from "../modules/shared/services/user.service";


export function initializeUser(userService: UserService) {
  return () => new Promise<any>((resolve, reject) => {
    userService.getCurrentUser();
    resolve("ok");
  });
}
