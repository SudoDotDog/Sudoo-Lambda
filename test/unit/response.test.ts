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
import { createLambdaResponse, createSucceedLambdaResponse } from "../../src";

describe('Given [Response] Helper Methods', (): void => {

    const chance: Chance.Chance = new Chance('lambda-response');

    it('should be able to create response', (): void => {

        const response: APIGatewayProxyResult = createLambdaResponse(
            HTTP_RESPONSE_CODE.OK,
        );

        expect(response).to.be.deep.equal({
            statusCode: HTTP_RESPONSE_CODE.OK,
            body: "{}",
        });
    });

    it('should be able to succeed response', (): void => {

        const response: APIGatewayProxyResult = createSucceedLambdaResponse();

        expect(response).to.be.deep.equal({
            statusCode: HTTP_RESPONSE_CODE.OK,
            body: "{}",
        });
    });
});
