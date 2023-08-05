# <p align="center">stdio.h for nodejs</p>

<p align="center">
    <img alt="Github License" src="https://img.shields.io/github/license/Arikato111/stdio.h-ts" />
    <img alt="GitHub Package.json Version" src="https://img.shields.io/github/package-json/v/Arikato111/stdio.h-ts" />
    <img alt="GitHub Issues" src="https://img.shields.io/github/issues/Arikato111/stdio.h-ts" />
    <img alt="GitHub Pull Requests" src="https://img.shields.io/github/issues-pr/Arikato111/stdio.h-ts" />
    <img alt="GitHub Contributors" src="https://img.shields.io/github/contributors/Arikato111/stdio.h-ts" />
    <img alt="" src="https://img.shields.io/github/repo-size/Arikato111/stdio.h-ts" />
</p>

just hobby project to create input output for nodejs

## Installing

Install with NPM
```
npm install stdio.h
```
or install with Yarn
```
yarn add stdio.h
```

## Example


```ts
import { int, printf } from "../dist/index";

let n1: int = 20;
let n2: int = 30;
printf("%d+%d = %d", n1, n2, n1 + n2);
```