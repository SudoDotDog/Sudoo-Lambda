/**
 * @author WMXPY
 * @namespace Lambda
 * @description Declare
 */

export type LambdaResponseHeaderElement = Array<boolean | number | string> | boolean | number | string;
export type LambdaResponseHeaderType = Record<string, LambdaResponseHeaderElement>;

export type LambdaResponseBodyType =
    Record<string, any> | string | number | boolean;

export const fixUndefinedStringifyBody = (body?: LambdaResponseBodyType): string => {

    if (typeof body === 'undefined') {
        return JSON.stringify({});
    }

    return JSON.stringify(body);
};
