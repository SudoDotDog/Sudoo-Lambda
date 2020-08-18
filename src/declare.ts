/**
 * @author WMXPY
 * @namespace Lambda
 * @description Declare
 */

export type LambdaResponseBodyType = Record<string, any> | string | number | boolean;

export const fixUndefinedStringifyBody = (body?: LambdaResponseBodyType): string => {

    if (typeof body === 'undefined') {
        return JSON.stringify({});
    }

    return JSON.stringify(body);
};
