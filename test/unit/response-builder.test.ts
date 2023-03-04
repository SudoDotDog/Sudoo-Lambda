/**
 * @author WMXPY
 * @namespace Lambda
 * @description Response
 * @override Unit
 */

import { HTTP_RESPONSE_CODE } from "@sudoo/magic";
import { APIGatewayProxyResult } from "aws-lambda";
import { expect } from "chai";
import * as Chance from "chance";
import { LambdaResponseBuilder } from "../../src";

describe('Given [Response] Helper Methods', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('lambda-response');

    it('should be able to create response', (): void => {

        const response: APIGatewayProxyResult = LambdaResponseBuilder
            .create()
            .build(HTTP_RESPONSE_CODE.OK);

        expect(response).to.be.deep.equal({
            statusCode: HTTP_RESPONSE_CODE.OK,
            body: "{}",
            headers: undefined,
            multiValueHeaders: undefined,
            isBase64Encoded: false,
        });
    });

    it('should be able to succeed response', (): void => {

        const response: APIGatewayProxyResult = LambdaResponseBuilder
            .create()
            .build(HTTP_RESPONSE_CODE.OK);

        expect(response).to.be.deep.equal({
            statusCode: HTTP_RESPONSE_CODE.OK,
            body: "{}",
            headers: undefined,
            multiValueHeaders: undefined,
            isBase64Encoded: false,
        });
    });
});
