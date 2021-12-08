import { EnumService } from "../modules/shared/services/enum.service";

export function initializeEnum(enumService: EnumService, enumName: string) {
  return () => new Promise<any>((resolve, reject) => {
    enumService.list("categories");
    resolve("ok");
  });
}
