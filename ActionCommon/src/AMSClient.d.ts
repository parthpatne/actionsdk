import { Attachment } from './model/Attachment';
export declare class AMSClient {
    static uploadBlob(imageObj: Attachment, sasToken: string): Promise<string>;
}
