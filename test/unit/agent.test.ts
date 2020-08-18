/**
 * @author WMXPY
 * @namespace Lambda
 * @fileoverview Agent
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import * as Sinon from 'sinon';
import { Agent, RESPONSE_CODE } from '../../src';

describe('Given a <Agent> class', function (this: Mocha.Suite): void {

    const chance: Chance.Chance = new Chance('response-test');

    it('should be able to create from static', () => {

        const callback: Sinon.SinonSpy = Sinon.spy();
        const agent: Agent = Agent.from(callback);

        // tslint:disable-next-line
        expect(agent).to.be.not.null;
    });

    it('should be able to add information', () => {

        const key: string = chance.string();
        const value: string = chance.string();

        const callback: Sinon.SinonSpy = Sinon.spy();
        const agent: Agent = Agent.from(callback);
        agent.add(key, value);

        expect(agent).to.be.lengthOf(1);
        // tslint:disable-next-line
        expect(callback.called).to.be.false;
    });

    it('should be able to send succeed response', () => {

        const key: string = chance.string();
        const value: string = chance.string();

        const callback: Sinon.SinonSpy = Sinon.spy();
        const agent: Agent = Agent.from(callback);
        agent.add(key, value);
        agent.succeed();

        expect(agent).to.be.lengthOf(1);
        // tslint:disable-next-line
        expect(callback.calledWith(null, {
            code: RESPONSE_CODE.SUCCEED,
            body: {
                [key]: value,
            },
        })).to.be.true;
    });

    it('should be able to send failed response', () => {

        const key: string = chance.string();
        const value: string = chance.string();

        const callback: Sinon.SinonSpy = Sinon.spy();
        const agent: Agent = Agent.from(callback);
        agent.add(key, value);
        agent.failed(RESPONSE_CODE.FAILED);

        expect(agent).to.be.lengthOf(1);
        // tslint:disable-next-line
        expect(callback.calledWith(RESPONSE_CODE.FAILED.toString(), {
            code: RESPONSE_CODE.FAILED,
            body: {
                [key]: value,
            },
        })).to.be.true;
    });
});
