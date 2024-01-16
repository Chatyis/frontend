export interface ColorForm {
    file: File;
    areCustomParametersApplied: Boolean;
    clusterAmount: Number;
    maximumFileSize: Number;
    applyRag: Boolean;
    ragThreshold: Number;
}

export enum InputType {
    text = "text",
    number = "number"
}