/**
 * @author WMXPY
 * @namespace Lambda
 * @description Response
 */

import { HTTP_RESPONSE_CODE } from '@sudoo/magic';
import { APIGatewayProxyResult } from "aws-lambda";
import { fixUndefinedStringifyBody, LambdaResponseBodyType } from './declare';

export const createLambdaResponse = (
    code: HTTP_RESPONSE_CODE,
    body?: LambdaResponseBodyType,
): APIGatewayProxyResult => {

    if (typeof body === 'string'
        && typeof body === 'number'
        && typeof body === 'boolean') {

        return {
            statusCode: code,
            body: fixUndefinedStringifyBody({
                message: body,
            }),
        }
    }

    if (typeof body !== 'object') {

        return {
            statusCode: code,
            body: fixUndefinedStringifyBody(body),
        }
    }

    return {
        statusCode: code,
        body: fixUndefinedStringifyBody({
            ...body,
        }),
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
