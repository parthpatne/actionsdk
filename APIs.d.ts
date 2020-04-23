import { ActionInstance, ActionInstanceRow, ActionInstanceSummary, ActionInstanceRowsFetchResult, ActionInstanceUpdateInfo, UserProfile, UserProfilesFetchResult, ProfilePhotosFetchResult, MemberCount, NonResponder, ActionContext, NavBarMenuItem, FilteredActionInstanceRequest, FilteredActionInstanceResponse, FilteredTemplateActionInstanceResponse, ConversationInfo, TeamsGroup, GetChannelsForTeamsResponse } from "@actionCommon";
export declare namespace APIs {
    /**
    * Creates a new Action instance
    * @param {ActionInstance} actionInstance
    * @return promise returning either success or ActionError
    */
    function createActionInstance(actionInstance: ActionInstance, viewData?: any): Promise<boolean>;
    /**
    * Creates a new Action instance along with the given rows
    * @param {ActionInstance} actionInstance
    * @param {ActionInstanceRow[]} actionInstanceRows
    * @return promise returning either success or ActionError
    */
    function createActionInstanceWithRows(actionInstance: ActionInstance, actionInstanceRows: ActionInstanceRow[], viewData?: any): Promise<boolean>;
    /**
    * Gets the current Action instance
    * @param {string} actionInstanceId ID of the action instance
    * @return promise returning either ActionInstance or ActionError
    */
    function getActionInstance(actionInstanceId: string): Promise<ActionInstance>;
    /**
    * Updates the current Action instance
    * @param {string} actionInstanceId ID of the action instance
    * @param {ActionInstanceUpdateInfo} actionInstanceUpdateInfo
    * @return promise returning either success or ActionError
    */
    function updateActionInstance(actionInstanceId: string, actionInstanceUpdateInfo: ActionInstanceUpdateInfo): Promise<boolean>;
    /**
    * Deletes the current Action instance
    * @param {string} actionInstanceId ID of the action instance
    * @return promise returning either success or ActionError
    */
    function deleteActionInstance(actionInstanceId: string): Promise<boolean>;
    /**
    * Sends a reminder for the current Action instance
    * @param {string} actionInstanceId ID of the action instance
    * @return promise returning either success or ActionError
    */
    function sendActionInstanceReminder(actionInstanceId: string): Promise<boolean>;
    /**
    * Creates or updates Action instance rows
    * @param {string} actionInstanceId ID of the action instance
    * @param {ActionInstanceRow[]} actionInstanceRows An array of ActionInstanceRow instances
    * @return promise returning either success or ActionError
    */
    function createOrUpdateActionInstanceRows(actionInstanceId: string, actionInstanceRows: ActionInstanceRow[]): Promise<boolean>;
    /**
    * Gets an Action instance row corresponding to the given id
    * @param {string} actionInstanceId ID of the action instance
    * @param {string} actionInstanceRowId ID of the action instance row to fetch
    * @return promise returning either ActionInstanceRow or ActionError
    */
    function getActionInstanceRow(actionInstanceId: string, actionInstanceRowId: string): Promise<ActionInstanceRow>;
    /**
    * Gets Action instance rows
    * @param {string} actionInstanceId ID of the action instance
    * @param {string} creatorId ID of the creator of the action instance rows to fetch
    * @param {string} continuationToken continuation token to handle paged results
    * @param {number} pageSize size of the page (number of results to fetch in one call)
    * @return promise returning either an array of ActionInstanceRow or ActionError
    */
    function getActionInstanceRows(actionInstanceId: string, creatorId: string, continuationToken: string, pageSize: number): Promise<ActionInstanceRowsFetchResult>;
    /**
    * Deletes an Action instance row
    * @param {string} actionInstanceId ID of the action instance
    * @param {string} actionInstanceRowId ID of the action instance row to delete
    * @return promise returning either success or ActionError
    */
    function deleteActionInstanceRow(actionInstanceId: string, actionInstanceRowId: string): Promise<boolean>;
    /**
    * Gets the summary of the current Action instance
    * @param {string} actionInstanceId ID of the action instance
    * @param {boolean} isShortSummary flag denoting if aggregates are to be returned with the summary
    * @return promise returning either ActionInstanceSummary or ActionError
    */
    function getActionInstanceSummary(actionInstanceId: string, isShortSummary?: boolean): Promise<ActionInstanceSummary>;
    /**
    * Downloads the Action instance result result
    * @param {string} actionInstanceId ID of the action instance
    * @return promise returning either success or ActionError
    */
    function downloadActionInstanceResult(actionInstanceId: string, fileName?: string): Promise<any>;
    /**
    * Gets non responders of the current Action instance
    * @param {string} actionInstanceId ID of the action instance
    * @return promise returning either an array of non-responders or ActionError
    */
    function getActionInstanceNonResponders(actionInstanceId: string): Promise<NonResponder>;
    /**
    * Gets the members count of the current conversation
    * @param {ConversationInfo} conversationInfo conversation details
    * @param {string} actionInstanceId ID of the action instance
    * @return promise returning either a result or ActionError
    */
    function getConversationMembersCount(conversationInfo: ConversationInfo, actionInstanceId: string): Promise<MemberCount>;
    /**
    * Gets the members of the current conversation
    * @param {ConversationInfo} conversationInfo conversation details
    * @param {string} actionInstanceId ID of the action instance
    * @return promise returning either an array of members or ActionError
    */
    function getConversationMembers(conversationInfo: ConversationInfo, actionInstanceId: string): Promise<UserProfile[]>;
    /**
    * Gets the details of the given user ids
    * @param {string[]} userIDs array of user ids
    * @param {string} actionInstanceId ID of the action instance
    * @return promise returning either UserProfilesFetchResult or ActionError
    */
    function getUserProfiles(userIDs: string[], actionInstanceId: string): Promise<UserProfilesFetchResult>;
    /**
    * Gets profile photos of the given user ids
    * @param {string[]} userIDs array of user ids
    * @return promise returning either ProfilePhotosFetchResult or ActionError
    */
    function getUserProfilePhotos(userIDs: string[]): Promise<ProfilePhotosFetchResult>;
    /**
    * Sets the nav bar items when the host's client type is mobile
    * @param {NavBarMenuItem[]} menuItems list of NavBarMenuItems
    * @param {(id: string) => void} callback callback function to be called when menu item is tapped
    * @return promise returning either success or ActionError
    */
    function setNavBarMenuItems(menuItems: NavBarMenuItem[], callback: (id: string) => void): Promise<boolean>;
    /**
    * Get current Action context
    * @return promise returning either ActionContext or ActionError
    */
    function getCurrentContext(): Promise<ActionContext>;
    /**
    * Dismiss the current screen.
    * @return promise returning either success or ActionError
    */
    function dismissScreen(): Promise<boolean>;
    /**
    * Show the diagnostic view containing diagnostic logs
    * @return promise returning either success or ActionError
    */
    function showDiagnosticView(): Promise<boolean>;
    /**
     * To notify app loaded to hide loading indicator
     * @return promise returning false if already called once else true.
     */
    function hideLoadingIndicator(): Promise<boolean>;
    function actionViewDidLoad(success: boolean, props?: any): Promise<boolean>;
    /**
    * Registers a handler for the hardware back button in Android
    * @param {() => void} handler handler method to be invoked when back button is pressed
    * @return promise returning either success or ActionError
    */
    function registerBackButtonHandler(handler: () => void): Promise<boolean>;
    /**
    * Call server to get list of templates from server.
    * @param string filter required for getting list of templates
    * @return promise returning either List of ActionInstances or ActionError
    */
    function getTemplateActions(filter: FilteredActionInstanceRequest): Promise<FilteredTemplateActionInstanceResponse>;
    /**
    * Call server to get list of user actions from server.
    * @param string filter required for getting list of Active action instance
    * @return promise returning either List of ActionInstances or ActionError
    */
    function getActionInstances(filter: FilteredActionInstanceRequest): Promise<FilteredActionInstanceResponse>;
    /**
     * Call server to get list of user actions from server.
     * @param string filter required for getting list of Drafts
     * @return promise returning either List of ActionInstances or ActionError
     */
    function getDraftActionInstances(filter: FilteredActionInstanceRequest): Promise<FilteredActionInstanceResponse>;
    /**
    * Call server to create a action as draft
    * @param actionInstance action instance object to create
    * @return promise returning either ActionInstances or ActionError
    */
    function saveActionInstanceDraft(actionInstance: ActionInstance): Promise<boolean>;
    /**
     * Call server to update the draft
     * @param actionInstance action instance object to update
     * @return promise returning success or ActionError
     */
    function updateActionInstanceDraft(actionInstance: ActionInstance): Promise<boolean>;
    /**
     * send draft
     * @return promise returning list of groups and channels
     */
    function promoteDraftToAction(actionInstanceId: string): Promise<boolean>;
    /**
     * Creates a new Action instance
     * @param {ActionInstance} actionInstance
     * @return promise returning either success or ActionError
     */
    function createActionInstanceNoBot(actionInstance: ActionInstance): Promise<boolean>;
    /**
    * Creates a new Action instance
    * @param {ActionInstance} actionInstance
    * @return promise returning either success or ActionError
    */
    function getJoinedTeams(): Promise<TeamsGroup[]>;
    /**
    * Creates a new Action instance
    * @param {ActionInstance} actionInstance
    * @return promise returning either success or ActionError
    */
    function getListOfChannelsForGroups(listOfGroups: Array<string>): Promise<GetChannelsForTeamsResponse>;
}
