import { ActionSdkCommand } from "./ActionSdkCommand";
export interface IActionHost {
    executeActionSDKApi(command: ActionSdkCommand, args: any[]): Promise<any>;
    registerActionSDKCallback(command: ActionSdkCommand, args: any[], callback: any): Promise<boolean>;
}
