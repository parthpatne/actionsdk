import { ClientType } from "./ClientType";
import { ActionEnvironment } from "./ActionEnvironment";
import { ECSSettings } from "./ECSSettings";
import { ConversationInfo } from "./ConversationInfo";
export interface ActionContext {
    hostType: ClientType;
    environment: ActionEnvironment;
    actionPackageId: string;
    actionInstanceId: string;
    tenantId: string;
    conversationInfo: ConversationInfo;
    userId: string;
    hostClientType: string;
    locale: string;
    theme: string;
    ecsSettings: ECSSettings;
    customProps: string;
    viewData: string;
}
export declare const ActionContext = "ActionContext";
