#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const cliPath = __dirname;
const isDev = cliPath.includes('cli');

const boilerplatePath = isDev
  ? path.resolve(__dirname, '..', 'boilerplate') // Desenvolvimento
  : path.resolve(__dirname, 'boilerplate'); // Produção

const projectPath = isDev
  ? path.join(process.cwd(), 'test-boilerplate') // Desenvolvimento
  : process.cwd(); // Produção

if (!fs.existsSync(boilerplatePath)) {
  console.error(`Erro: A pasta ${boilerplatePath} não existe.`);
  process.exit(1);
}

fs.cpSync(boilerplatePath, projectPath, {
  errorOnExist: true,
  recursive: true,
});
