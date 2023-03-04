/**
 * @author WMXPY
 * @namespace Lambda
 * @description Response Manager
 */

import { LambdaResponseBuilder } from './response-builder';

export type LambdaResponseManagerMiddleware = (builder: LambdaResponseBuilder) => void;

export class LambdaResponseManager {

    public static create(): LambdaResponseManager {

        return new LambdaResponseManager();
    }

    private readonly _middlewareSet: Set<LambdaResponseManagerMiddleware>;

    private constructor() {

        this._middlewareSet = new Set();
    }

    public addMiddleware(middleware: LambdaResponseManagerMiddleware): this {

        this._middlewareSet.add(middleware);
        return this;
    }

    public createBuilder(): LambdaResponseBuilder {

        const builder: LambdaResponseBuilder = LambdaResponseBuilder.create();

        this._middlewareSet.forEach((middleware: LambdaResponseManagerMiddleware) => {

            middleware(builder);
        });
        return builder;
    }
}
