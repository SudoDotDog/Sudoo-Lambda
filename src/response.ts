/**
 * @author WMXPY
 * @namespace Lambda
 * @description Response
 */

import { HTTP_RESPONSE_CODE } from '@sudoo/magic';
import { APIGatewayProxyResult } from "aws-lambda";
import { fixUndefinedStringifyBody, LambdaResponseBodyType, LambdaResponseHeaderType } from './declare';
import { ConstructHeadersResult, createConstructHeaders } from './headers';

export const createLambdaResponse = (
    code: HTTP_RESPONSE_CODE,
    body?: LambdaResponseBodyType,
    headers?: LambdaResponseHeaderType,
    isBase64Encoded: boolean = false,
): APIGatewayProxyResult => {

    const constructedHeaders: ConstructHeadersResult = createConstructHeaders(headers);

    if (typeof body === 'string'
        && typeof body === 'number'
        && typeof body === 'boolean') {

        return {

            statusCode: code,
            body: fixUndefinedStringifyBody({
                message: body,
            }),
            headers: constructedHeaders.headers,
            multiValueHeaders: constructedHeaders.multiValueHeaders,
            isBase64Encoded,
        };
    }

    return {

        statusCode: code,
        body: fixUndefinedStringifyBody(body),
        headers: constructedHeaders.headers,
        multiValueHeaders: constructedHeaders.multiValueHeaders,
        isBase64Encoded,
    };
};

export const createSucceedLambdaResponse = (
    body?: LambdaResponseBodyType,
    headers?: LambdaResponseHeaderType,
    isBase64Encoded: boolean = false,
): APIGatewayProxyResult => {

    return createLambdaResponse(
        HTTP_RESPONSE_CODE.OK,
        body,
        headers,
        isBase64Encoded,
    );
};
