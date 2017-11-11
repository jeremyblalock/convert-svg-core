/*
 * Copyright (C) 2017 Alasdair Mercer, !ninja
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

'use strict';

const { expect } = require('chai');
const sinon = require('sinon');

const API = require('../src/API');
const Converter = require('../src/Converter');
const Provider = require('../src/Provider');

describe('[convert-svg-core] API', () => {
  let api;
  let provider;

  beforeEach(() => {
    provider = sinon.createStubInstance(Provider);
    api = new API(provider);
  });

  describe('#convert', () => {
    // Covered by convert-svg-test-helper
  });

  describe('#convertFile', () => {
    // Covered by convert-svg-test-helper
  });

  describe('#createConverter', () => {
    it('should return Converter instance using provider', () => {
      const converter = api.createConverter();

      expect(converter).to.be.an.instanceOf(Converter);
      expect(converter.provider).to.equal(provider);
    });

    it('should never return same instance', () => {
      expect(api.createConverter()).to.not.equal(api.createConverter());
    });
  });

  describe('#provider', () => {
    it('should return provider', () => {
      expect(api.provider).to.equal(provider);
    });
  });

  describe('#version', () => {
    it('should return provider version', () => {
      provider.getVersion.returns('0.0.0');

      expect(api.version).to.equal('0.0.0');
    });
  });
});
