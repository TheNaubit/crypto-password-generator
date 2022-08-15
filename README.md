# Nau Password Generator

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Demo
✅ You can try this online here: [https://passgenerator.nauverse.com/](https://passgenerator.nauverse.com/)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

As you may know, random number generation is not truly random in your computer, creating a potential security risk if you use a password generator to generate a new random password.

Here, we are using [Rando.js](https://github.com/nastyox/Rando.js) to generate cryptographically secure random numbers / letters / symbols.

Everything happens on the client side, so we avoid potential man-in-the-middle attacks.

Even if we are trying to create something to generate passwords, we are not guaranteeing anything; we provide this code as it is.

## Dependencies we are using
- [Mantine](https://mantine.dev/)
- [Emotion](https://emotion.sh/)
- [Rando.js](https://github.com/nastyox/Rando.js)