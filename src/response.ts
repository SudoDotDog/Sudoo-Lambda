/**
 * @author WMXPY
 * @namespace Lambda
 * @description Response
 */

import { HTTP_RESPONSE_CODE } from '@sudoo/magic';
import { APIGatewayProxyResult } from "aws-lambda";
import { fixUndefinedStringifyBody, LambdaResponseBodyType, LambdaResponseHeaderType } from './declare';

export const createLambdaResponse = (
    code: HTTP_RESPONSE_CODE,
    body?: LambdaResponseBodyType,
    headers?: LambdaResponseHeaderType,
    isBase64Encoded: boolean = false,
): APIGatewayProxyResult => {

    if (typeof body === 'string'
        && typeof body === 'number'
        && typeof body === 'boolean') {

        return {

            statusCode: code,
            body: fixUndefinedStringifyBody({
                message: body,
            }),
            isBase64Encoded,
        };
    }

    if (typeof body !== 'object') {

        return {

            statusCode: code,
            body: fixUndefinedStringifyBody(body),
            isBase64Encoded,
        };
    }

    return {

        statusCode: code,
        body: fixUndefinedStringifyBody({
            ...body,
        }),
        isBase64Encoded,
    };
};

export const createSucceedLambdaResponse = (
    body?: LambdaResponseBodyType,
): APIGatewayProxyResult => {

    return createLambdaResponse(
        HTTP_RESPONSE_CODE.OK,
        body,
    );
};
