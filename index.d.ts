import { Plugin } from 'vite'

declare function createPlugin(options?: {pragma: string, include: RegExp[], importCode: string}): Plugin

export default createPlugin
