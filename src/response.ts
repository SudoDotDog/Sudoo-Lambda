/**
 * @author WMXPY
 * @namespace Lambda
 * @description Response
 */

import { HTTP_RESPONSE_CODE } from '@sudoo/magic';
import { APIGatewayProxyResult } from "aws-lambda";

export const createLambdaResponse = (
    code: HTTP_RESPONSE_CODE,
    body: Record<string, any> | string | number | boolean,
): APIGatewayProxyResult => {

    if (typeof body === 'string'
        && typeof body === 'number'
        && typeof body === 'boolean') {

        return {
            statusCode: code,
            body: JSON.stringify({
                message: body,
            }),
        }
    }

    if (typeof body !== 'object') {

        return {
            statusCode: code,
            body: JSON.stringify(body),
        }
    }

    return {
        statusCode: code,
        body: JSON.stringify({
            ...body,
        }),
    };
};
