import { ActionSdkCommand } from "@actionCommon";
export declare namespace Host {
    function executeActionSDKApi<T>(command: ActionSdkCommand, args?: any[]): Promise<T>;
    function registerActionSDKCallback(command: ActionSdkCommand, args: any[], handler: any): Promise<boolean>;
}
