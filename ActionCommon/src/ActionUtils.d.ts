import { ActionInstance } from "./model/ActionInstance";
import { ActionInstanceRow } from "./model/ActionInstanceRow";
import { ActionInstanceProperty } from "./model/ActionInstanceProperty";
import { ActionContext } from "./ActionContext";
export declare namespace ActionUtils {
    function getActionInstanceProperty(actionInstance: ActionInstance, propertyName: string): ActionInstanceProperty;
    function prepareActionInstance(actionInstance: ActionInstance, actionContext: ActionContext): void;
    function prepareActionInstanceRow(actionInstanceRow: ActionInstanceRow): void;
    function prepareActionInstanceRows(actionInstanceRows: ActionInstanceRow[]): void;
}
