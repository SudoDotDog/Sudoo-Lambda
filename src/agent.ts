/**
 * @author WMXPY
 * @namespace Lambda
 * @description Agent
 */

import { Callback } from "aws-lambda";
import { RESPONSE_CODE } from "./declare";

export class Agent {

    public static from(callback: Callback): Agent {

        return new Agent(callback);
    }

    private _body: Map<string, any>;
    private _callback: Callback;

    private constructor(callback: Callback) {

        this._body = new Map<string, any>();
        this._callback = callback;
    }

    public get length(): number {

        return this._body.size;
    }

    public add(name: string, value: any): Agent {

        this._body.set(name, value);
        return this;
    }

    public succeed(): Agent {

        this._callback(null, {
            code: RESPONSE_CODE.SUCCEED,
            body: this._flush(),
        });
        return this;
    }

    public failed(code: RESPONSE_CODE): Agent {

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
