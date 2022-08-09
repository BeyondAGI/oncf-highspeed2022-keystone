// admin/config.tsx
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@keystone-ui/core';

function CustomLogo() {
    return <img alt="Logo" src="https://svgshare.com/i/jvb.svg" width="180" height="100%"></img>
}

export const components = {
    Logo: CustomLogo
}