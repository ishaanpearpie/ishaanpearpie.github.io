
import type { APIRoute } from 'astro';
import { getFastfetch, getWhoami, getHelp } from '../../lib/terminal-commands';

export const prerender = true;

export const GET: APIRoute = async () => {
    const fastfetch = await getFastfetch();
    const whoami = getWhoami();
    const help = getHelp();

    return new Response(
        JSON.stringify({
            fastfetch,
            whoami,
            help,
        }),
        {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        }
    );
}
