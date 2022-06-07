import { AwsBucketAction } from "../enum/aws-bucket-action.enum";
export declare class AwsFileInfo {
    bucketAction: AwsBucketAction;
    key: string;
    contentType: string;
    ACL: string;
}
