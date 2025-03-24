/** @format */

import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
   /*
    * Serverside Environment variables, not available on the client.
    * Will throw if you access these variables on the client.
    */
   server: {
      APP_NAME: z.string().min(1),
      NODE_ENV: z.enum(['development', 'test', 'production']),
   },

   /*
    * Environment variables available on the client (and server).
    *
    * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
    */
   client: {
      NEXT_PUBLIC_BASE_URL: z.string(),
   },

   // Tell the library when we're in a server context.
   isServer: typeof window === 'undefined',

   skipValidation: !!process.env.SKIP_ENV_VALIDATION,

   runtimeEnv: {
      NODE_ENV: process.env.NODE_ENV,
      APP_NAME: process.env.APP_NAME,
      NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
   },
})
