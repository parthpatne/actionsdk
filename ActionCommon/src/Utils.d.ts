export declare namespace Utils {
    let YEARS: string;
    let MONTHS: string;
    let WEEKS: string;
    let DAYS: string;
    let HOURS: string;
    let MINUTES: string;
    let DEFAULT_LOCALE: string;
    function parseUrlQueries(url: string): {
        [key: string]: string;
    };
    function isValidJson(json: string): boolean;
    function sanitizeHtmlTags(str: string): string;
    function executeFunction(funcNameWithNamespaces: string, args?: any[]): void;
    function replaceCharacterInString(str: string, oldChar: string, newChar: string): string;
    function jsonIsArray(json: JSON): boolean;
    function isEmptyString(str: string): boolean;
    function isEmptyObject(obj: any): boolean;
    function parseJson(jsonString: any, defaultValue?: any): any;
    function stringifyJson(obj: any): string;
    function getTimeRemaining(deadLineDate: Date): {};
    function getDefaultExpiry(activeDays: number): Date;
    function isServerURL(url: string): boolean;
    function generateGUID(): string;
    function getValues(map: JSON): any[];
    function getMaxValue(values: number[]): number;
    function downloadContent(fileName: string, data: string): void;
    function isRTL(locale: string): boolean;
    function readBlobAsync(blob: Blob): Promise<string | ArrayBuffer>;
    function dateTimeToLocaleString(date: Date, locale: string, options?: Intl.DateTimeFormatOptions): string;
    function announceText(text: string): void;
    function getNonNullString(str: string): string;
}
