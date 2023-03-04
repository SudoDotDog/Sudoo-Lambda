/**
 * @author WMXPY
 * @namespace Lambda
 * @description Response Builder
 */

import { HTTP_RESPONSE_CODE } from '@sudoo/magic';
import { LambdaResponseBodyType, LambdaResponseHeaderElement, LambdaResponseHeaderType } from './declare';

export class LambdaResponseBuilder {

    public static create(statusCode: HTTP_RESPONSE_CODE): LambdaResponseBuilder {

        return new LambdaResponseBuilder(statusCode);
    }

    private readonly _statusCode: HTTP_RESPONSE_CODE;

    private _headers: LambdaResponseHeaderType;
    private _body: LambdaResponseBodyType;

    private _isBase64Encoded: boolean;

    private constructor(statusCode: HTTP_RESPONSE_CODE) {

        this._statusCode = statusCode;

        this._headers = {};
        this._body = {};

        this._isBase64Encoded = false;
    }

    public addHeader(key: string, value: LambdaResponseHeaderElement): this {

        this._headers[key] = value;
        return this;
    }

    public mergeHeaders(headers: LambdaResponseHeaderType): this {

        this._headers = {
            ...this._headers,
            ...headers,
        };
        return this;
    }

    public replaceHeaders(headers: LambdaResponseHeaderType): this {

        this._headers = headers;
        return this;
    }

    public addBody(key: string, value: any): this {

        this._body[key] = value;
        return this;
    }

    public replaceBody(body: LambdaResponseBodyType): this {

        this._body = body;
        return this;
    }

    public setBase64Encoded(isBase64Encoded: boolean): this {

        this._isBase64Encoded = isBase64Encoded;
        return this;
    }
}
