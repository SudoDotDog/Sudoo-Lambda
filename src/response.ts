/**
 * @author WMXPY
 * @namespace Lambda
 * @description Response
 */

import { Callback } from "aws-lambda";
import { RESPONSE_CODE } from "./declare";

export class Response {

    private _body: Map<string, any>;
    private _callback: Callback;

    public constructor(callback: Callback) {

        this._body = new Map<string, any>();
        this._callback = callback;
    }

    public add(name: string, value: any): Response {

        this._body.set(name, value);
        return this;
    }

    public succeed(): Response {

        this._callback(null, {
            code: RESPONSE_CODE.SUCCEED,
            body: this._flush(),
        });
        return this;
    }

    public failed(code: RESPONSE_CODE): Response {

        this._callback(code.toString(), {
            code,
            body: this._flush(),
        });
        return this;
    }

    protected _flush(): { [key: string]: any; } {

        const result: { [key: string]: any; } = {};
        this._body
            .forEach((value: any, key: string) => result[key] = value);
        return result;
    }
}
