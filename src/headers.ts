/**
 * @author WMXPY
 * @namespace Lambda
 * @description Headers
 */

import { LambdaResponseHeaderElement, LambdaResponseHeaderType } from "./declare";

export type ConstructHeadersResult = {

    headers?: Record<string, boolean | number | string>;
    multiValueHeaders?: Record<string, Array<boolean | number | string>>;
};

export const createConstructHeaders = (
    headers?: LambdaResponseHeaderType,
): ConstructHeadersResult => {

    if (typeof headers === 'undefined') {
        return {};
    }

    const keys: string[] = Object.keys(headers);

    const singleValueHeaders: Record<string, boolean | number | string> = {};
    const multiValueHeaders: Record<string, Array<boolean | number | string>> = {};

    for (const key of keys) {

        const value: LambdaResponseHeaderElement = singleValueHeaders[key];

        if (Array.isArray(value)) {
            multiValueHeaders[key] = value;
        } else {
            singleValueHeaders[key] = value;
        }
    }

    return {
        headers: singleValueHeaders,
        multiValueHeaders,
    };
};
