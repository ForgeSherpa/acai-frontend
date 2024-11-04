# AcAI Frontend

AcAI use React + Vite to power the beautiful UI interface of AcademyAI.

## Requirements

- NodeJS v20 and above. Latest LTS Recommended.
- pnpm (activate via corepack)
- AcAI Backend (get it on https://github.com/ForgeSherpa/acai-backend)

## Installation

Simply run:

```bash
pnpm i
```

> If `pnpm` not found, run `corepack enable` first. Run the command above again. If prompted to install pnpm, install it.

## Running

Running localy can be done with command below:
```bash
pnpm dev
```

## Building for Production

Use this command instead if you want to build it for production usage:

```bash
pnpm build
```

## Deploying

There are couple way to deploy React Project. By [Building For Production](#building-for-production) and deploy it like how you would on any normal
html project. Or you can use Vercel, Netlify, or any other cloud service that support Vite.
