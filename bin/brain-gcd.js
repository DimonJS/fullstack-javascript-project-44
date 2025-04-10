#!/usr/bin/env node

import gameGenerator from '../games/brain-gcd-logic.js';
import engine from '../src/index.js';

engine(gameGenerator());
